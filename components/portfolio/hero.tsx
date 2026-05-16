"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { stats } from "@/lib/constants";

const heroBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "SaaS UI",
  "Developer Tools",
  "Product Engineering",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.05)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted">
                Available for opportunities
              </span>
            </div>

            <h1 className="font-sans font-bold text-foreground text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6 text-balance">
              {"Ahmad "}
              <span className="text-accent">Piracha</span>
            </h1>

            <p className="font-mono text-accent text-sm uppercase tracking-widest mb-6">
              Frontend & Product Engineer
            </p>

            <p className="text-muted text-lg leading-relaxed max-w-lg mb-10">
              I build polished SaaS tools, developer utilities, and
              launch-ready web apps using React, Next.js, TypeScript, and
              modern UI systems.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-md border border-card-border bg-card text-xs font-mono text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-card-border text-foreground font-medium text-sm rounded-lg hover:bg-card hover:border-muted-foreground/30 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-2 py-3 text-muted hover:text-foreground font-medium text-sm transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <a
                href="https://github.com/AhmadPiracha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:ahmadpiracha3@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <div className="w-px h-4 bg-card-border mx-2" />
              <span className="text-xs text-muted-foreground font-mono">
                Islamabad, PK
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-up animation-delay-200">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-accent/20 to-transparent blur-sm" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-card-border">
                <Image
                  className="w-full h-full object-cover"
                  src="/images/ahmad.png"
                  alt="Ahmad Piracha"
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border border-card-border bg-card/60 backdrop-blur rounded-xl overflow-hidden animate-fade-in-up animation-delay-200">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 border-card-border odd:border-r lg:border-r last:border-r-0 border-b lg:border-b-0"
            >
              <p className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1000">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground/50" />
        <span className="text-xs text-muted-foreground font-mono">
          scroll
        </span>
      </div>
    </section>
  );
}
