import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(500).optional(),
  turnstileToken: z.string().optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };

    return entities[char];
  });
}

async function verifyTurnstile(token: string | undefined, request: NextRequest) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const remoteIp =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const result = (await response.json()) as { success?: boolean };

  return result.success === true;
}

export async function POST(request: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const payload = contactSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Please check your message and try again." }, { status: 400 });
  }

  if (payload.data.website) {
    return NextResponse.json({ ok: true });
  }

  const passedTurnstile = await verifyTurnstile(payload.data.turnstileToken, request);
  if (!passedTurnstile) {
    return NextResponse.json({ error: "Please verify that you are human and try again." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? "Portfolio <portfolio@ahmadpiracha.online>";
  const to = process.env.CONTACT_TO_EMAIL ?? "ahmadpiracha3@gmail.com";
  const name = escapeHtml(payload.data.name);
  const email = escapeHtml(payload.data.email);
  const message = escapeHtml(payload.data.message).replace(/\n/g, "<br />");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.data.email,
    subject: "New portfolio inquiry",
    text: `Name: ${payload.data.name}\nEmail: ${payload.data.email}\n\n${payload.data.message}`,
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Message could not be sent right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}