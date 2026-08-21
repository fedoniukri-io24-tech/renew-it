import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || (!body.phone && !body.email)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  // TODO: connect real delivery — e.g. email via Resend/Nodemailer,
  // a CRM/Google Sheets write, or a Telegram bot message.
  // For now the request is only logged on the server.
  console.log("New contact form submission:", body);

  return NextResponse.json({ ok: true });
}
