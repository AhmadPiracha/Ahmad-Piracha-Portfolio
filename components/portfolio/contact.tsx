"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
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
            <p className="text-muted text-base leading-relaxed max-w-md">
              {"I'd love to hear from you. Whether you have a project in mind, a question, or just want to connect -- feel free to reach out."}
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:ahmadpiracha3@gmail.com" className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <FaEnvelope size={14} className="text-accent" />
                </div>
                <span className="text-sm">ahmadpiracha3@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted">
                <div className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center">
                  <FaPhone size={14} className="text-accent" />
                </div>
                <span className="text-sm">(+92) 306 1138468</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a href="https://github.com/AhmadPiracha" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent/30 transition-colors" aria-label="GitHub">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-waseem-piracha/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent/30 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className={`flex-1 max-w-lg transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {sent && (
              <div className="mb-6 p-4 rounded-lg bg-accent-muted border border-accent/20 text-accent text-sm font-medium">
                {"Message sent successfully. I'll get back to you soon."}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
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
