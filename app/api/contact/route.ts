import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  containsDangerousPatterns,
  validateJsonInput,
} from "@/lib/security";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
const RECIPIENT_EMAIL =
  process.env.EMAILJS_RECIPIENT_EMAIL || "mokhamedteam@gmail.com";

const FORM_LABELS: Record<string, string> = {
  contact: "Contact section",
  "quote-modal": "Quote modal",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(req: NextRequest) {
  try {
    const clientId =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = checkRateLimit(clientId, 20, 60_000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const bodyText = await req.text();
    const jsonValidation = validateJsonInput(bodyText, 50_000);
    if (!jsonValidation.valid) {
      return NextResponse.json(
        { error: "Invalid input", details: jsonValidation.error },
        { status: 400 },
      );
    }

    const body = JSON.parse(bodyText) as Record<string, unknown>;
    const formSourceRaw = body.formSource;
    const name = body.name ?? body.fullName;
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    const formSource =
      formSourceRaw === "contact" || formSourceRaw === "quote-modal"
        ? formSourceRaw
        : "contact";

    if (!isNonEmptyString(name)) {
      return NextResponse.json({ error: "Name is required" }, { status: 422 });
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: "Phone or email is required" },
        { status: 422 },
      );
    }

    if (email && !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 422 },
      );
    }

    const contentToCheck = `${name} ${phone} ${email} ${message}`;
    if (containsDangerousPatterns(contentToCheck)) {
      return NextResponse.json(
        { error: "Invalid content in form data" },
        { status: 400 },
      );
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY ||
      !EMAILJS_PRIVATE_KEY
    ) {
      console.error("EmailJS configuration is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const sourceLabel = FORM_LABELS[formSource] ?? formSource;
    const safeName = escapeHtml(name.trim());
    const safePhone = phone ? escapeHtml(phone) : "—";
    const safeEmail = email ? escapeHtml(email) : "—";
    const safeMessage = message
      ? escapeHtml(message).replace(/\n/g, "<br>")
      : "—";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0b1d3a;">Renew-It — renewal quote request</h2>
        <p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">Sent from the Renew-It website contact form.</p>
      </div>
    `;

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: RECIPIENT_EMAIL,
          subject: `[Renew-It] ${sourceLabel} — ${name.trim()}`,
          message: emailHtml,
          reply_to: email || RECIPIENT_EMAIL,
        },
      }),
    });

    const responseData = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", responseData);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
