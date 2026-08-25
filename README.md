# AhmadPiracha-Portfolio

## Contact form

The contact form sends email through a server-side Next.js route using Resend.

Required environment variables:

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL=Portfolio <portfolio@ahmadpiracha.online>
CONTACT_TO_EMAIL=ahmadpiracha3@gmail.com
```

`RESEND_FROM_EMAIL` must use a domain verified in Resend. The visitor email is sent as `replyTo`, so replies go directly to the person who submitted the form.

Optional Cloudflare Turnstile protection:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```
