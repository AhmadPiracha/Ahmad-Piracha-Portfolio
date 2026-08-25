"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import { Github, Linkedin, X, Menu } from "lucide-react";
import TrackedLink from "@/components/portfolio/tracked-link";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="Ahmad Piracha"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`text-sm transition-colors duration-200 ${
                  active === link.title
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <TrackedLink
            href="https://github.com/AhmadPiracha"
            target="_blank"
            rel="noopener noreferrer"
            eventName="github_clicked"
            eventProperties={{ location: "navbar" }}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </TrackedLink>
          <TrackedLink
            href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
            target="_blank"
            rel="noopener noreferrer"
            eventName="linkedin_clicked"
            eventProperties={{ location: "navbar" }}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </TrackedLink>
        </div>

        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          {toggle ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-50 flex flex-col transition-all duration-300 md:hidden ${
          toggle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-card-border">
          <span className="text-foreground font-semibold text-sm">Menu</span>
          <button
            onClick={() => setToggle(false)}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col justify-center flex-1 px-8 gap-8">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              onClick={() => {
                setToggle(false);
                setActive(nav.title);
              }}
              className={`text-3xl font-semibold tracking-tight transition-colors ${
                active === nav.title
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {nav.title}
            </a>
          ))}
        </div>

        <div className="px-8 pb-8 flex gap-4 border-t border-card-border pt-6">
          <TrackedLink
            href="https://github.com/AhmadPiracha"
            target="_blank"
            rel="noopener noreferrer"
            eventName="github_clicked"
            eventProperties={{ location: "mobile_nav" }}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </TrackedLink>
          <TrackedLink
            href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
            target="_blank"
            rel="noopener noreferrer"
            eventName="linkedin_clicked"
            eventProperties={{ location: "mobile_nav" }}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </TrackedLink>
        </div>
      </div>
    </nav>
  );
}
