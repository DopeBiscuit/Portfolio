"use server";

import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
};

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    return { status: "error" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "abdulrahman.hany003@gmail.com";
  if (!apiKey) return { status: "error" };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Portfolio note from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });
    if (error) return { status: "error" };
    return { status: "success" };
  } catch {
    return { status: "error" };
  }
}
