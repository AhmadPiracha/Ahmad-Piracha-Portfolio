"use client";

import Script from "next/script";
import { useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { useInView } from "@/hooks/use-in-view";
import { Github, Mail, Phone } from "lucide-react";
import TrackedLink from "@/components/portfolio/tracked-link";

const bestFor = [
  "SaaS UI",
  "Frontend MVPs",
  "Developer tools",
  "Chrome extensions",
  "React/Next.js work",
];

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; theme?: "dark" | "light" | "auto"; callback: (token: string) => void; "expired-callback": () => void }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const isInView = useInView(sectionRef);
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const renderTurnstile = () => {
    if (!turnstileSiteKey || !turnstileRef.current || !window.turnstile || turnstileWidgetId.current) return;

    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      callback: setTurnstileToken,
      "expired-callback": () => setTurnstileToken(""),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitError("");
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (turnstileSiteKey && !turnstileToken) newErrors.turnstile = "Please complete the verification";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Message could not be sent right now.");
      }

      setSent(true);
      track("contact_form_submitted");
      setForm({ name: "", email: "", message: "", website: "" });
      setTurnstileToken("");
      if (turnstileWidgetId.current) window.turnstile?.reset(turnstileWidgetId.current);
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Message could not be sent right now.");
      if (turnstileWidgetId.current) window.turnstile?.reset(turnstileWidgetId.current);
      setTurnstileToken("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">Get in touch</p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">Contact</h2>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row gap-12">
          <div className={`flex-1 flex flex-col gap-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-foreground text-xl font-semibold leading-snug max-w-md">
              Have a frontend-heavy SaaS, dashboard, developer tool, or MVP
              idea?
            </p>
            <p className="text-muted text-base leading-relaxed max-w-md">
              I can help turn it into a clean, fast, and production-ready
              interface.
            </p>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Best for
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {bestFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md border border-card-border bg-card text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <TrackedLink href="mailto:ahmadpiracha3@gmail.com" eventName="contact_clicked" eventProperties={{ method: "email", location: "contact_section" }} className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                <span className="text-sm">ahmadpiracha3@gmail.com</span>
              </TrackedLink>
              <div className="flex items-center gap-3 text-muted">
                <div className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center">
                  <Phone size={14} className="text-accent" />
                </div>
                <span className="text-sm">(+92) 306 1138468</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <TrackedLink href="mailto:ahmadpiracha3@gmail.com" eventName="contact_clicked" eventProperties={{ method: "email", location: "contact_cta" }} className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors">
                Email Me
              </TrackedLink>
              <TrackedLink href="/resume.pdf" target="_blank" rel="noopener noreferrer" eventName="resume_downloaded" eventProperties={{ location: "contact_section" }} className="px-4 py-2 rounded-lg border border-card-border text-sm text-foreground hover:bg-card transition-colors">
                Download Resume
              </TrackedLink>
              <TrackedLink href="https://www.linkedin.com/in/ahmad-waseem-piracha/" target="_blank" rel="noopener noreferrer" eventName="linkedin_clicked" eventProperties={{ location: "contact_section" }} className="px-4 py-2 rounded-lg border border-card-border text-sm text-foreground hover:bg-card transition-colors">
                LinkedIn
              </TrackedLink>
              <TrackedLink href="https://github.com/AhmadPiracha" target="_blank" rel="noopener noreferrer" eventName="github_clicked" eventProperties={{ location: "contact_section" }} className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent/30 transition-colors" aria-label="GitHub">
                <Github size={16} />
              </TrackedLink>
            </div>
          </div>

          <div className={`flex-1 max-w-lg transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {sent && (
              <div className="mb-6 p-4 rounded-lg bg-accent-muted border border-accent/20 text-accent text-sm font-medium">
                {"Message sent successfully. I'll get back to you soon."}
              </div>
            )}
            {submitError && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="px-4 py-2.5 bg-card border border-card-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none transition-colors" />
                {errors.name && <span className="text-destructive text-xs">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="px-4 py-2.5 bg-card border border-card-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none transition-colors" />
                {errors.email && <span className="text-destructive text-xs">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea id="message" rows={5} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." className="px-4 py-2.5 bg-card border border-card-border rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:border-accent/50 focus:outline-none transition-colors resize-none" />
                {errors.message && <span className="text-destructive text-xs">{errors.message}</span>}
              </div>
              {turnstileSiteKey && (
                <>
                  <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="lazyOnload" onLoad={renderTurnstile} />
                  <div ref={turnstileRef} />
                  {errors.turnstile && <span className="text-destructive text-xs">{errors.turnstile}</span>}
                </>
              )}
              <button type="submit" disabled={loading} className="px-6 py-2.5 bg-accent text-accent-foreground font-medium text-sm rounded-lg hover:bg-accent/90 disabled:opacity-50 transition-colors w-fit">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
