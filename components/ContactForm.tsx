"use client";

import { FormEvent, useState } from "react";
import {
  formatUaePhone,
  getPhoneDigits,
  isPhoneEntered,
  isValidUaePhone,
} from "@/lib/format-phone";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

type ContactFormProps = {
  idPrefix?: string;
};

export default function ContactForm({ idPrefix = "" }: ContactFormProps) {
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, phone: formatUaePhone(e.target.value) }));

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handlePhoneFocus = () => {
    if (!form.phone) {
      setForm((prev) => ({ ...prev, phone: "+971 " }));
    }
  };

  const handlePhoneBlur = () => {
    if (getPhoneDigits(form.phone).length === 0) {
      setForm((prev) => ({ ...prev, phone: "" }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<FormState> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name";
    }
    if (!isPhoneEntered(form.phone) && !form.email.trim()) {
      nextErrors.phone = "Please enter a phone number or email";
    } else if (isPhoneEntered(form.phone) && !isValidUaePhone(form.phone)) {
      nextErrors.phone = "Please enter a valid UAE phone number";
    }
    if (form.email.trim() && !isValidEmail(form.email)) {
      nextErrors.email = "Please check the email format";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successState} role="status">
        <span className={styles.successIcon} aria-hidden="true">
          &#10003;
        </span>
        <h3>Request received</h3>
        <p>We’ll get back to you within one business day.</p>
        <button type="button" className={styles.btnGhost} onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor={fieldId("name")}>Name</label>
        <input
          id={fieldId("name")}
          type="text"
          autoComplete="name"
          placeholder="How should we address you"
          value={form.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? fieldId("name-error") : undefined}
        />
        {errors.name && (
          <span className={styles.errorText} id={fieldId("name-error")}>
            {errors.name}
          </span>
        )}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={fieldId("phone")}>Phone</label>
          <input
            id={fieldId("phone")}
            type="tel"
            autoComplete="tel"
            placeholder="+971 58 593 0042"
            value={form.phone}
            onChange={handlePhoneChange}
            onFocus={handlePhoneFocus}
            onBlur={handlePhoneBlur}
            inputMode="tel"
            maxLength={17}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? fieldId("phone-error") : undefined}
          />
          {errors.phone && (
            <span className={styles.errorText} id={fieldId("phone-error")}>
              {errors.phone}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor={fieldId("email")}>Email</label>
          <input
            id={fieldId("email")}
            type="email"
            autoComplete="email"
            placeholder="you@mail.com"
            value={form.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldId("email-error") : undefined}
          />
          {errors.email && (
            <span className={styles.errorText} id={fieldId("email-error")}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId("message")}>Message</label>
        <textarea
          id={fieldId("message")}
          rows={4}
          placeholder="What do you need renewed? Visa, Emirates ID, trade license…"
          value={form.message}
          onChange={handleChange("message")}
        />
      </div>

      <button type="submit" className={styles.btnSubmit} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send request"}
        <span className={styles.arrowIcon} aria-hidden="true">
          &#8594;
        </span>
      </button>

      {status === "error" && (
        <p className={styles.formError} role="alert">
          Could not send the request. Please try again or contact us directly.
        </p>
      )}

      <p className={styles.consent}>
        By submitting this form, you agree to the processing of personal data.
      </p>
    </form>
  );
}
