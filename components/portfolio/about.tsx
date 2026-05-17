"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="about" className="scroll-mt-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
            Introduction
          </p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">
            About Me
          </h2>
        </div>

        <div className="mt-8">
          <div className={`max-w-3xl transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-muted text-lg leading-relaxed">
              I&apos;m a Frontend/Product Engineer with 4+ years of experience
              building scalable web and mobile applications using React,
              Next.js, React Native, Angular, and TypeScript.
            </p>
            <p className="text-muted text-lg leading-relaxed mt-6">
              My focus is building clean, fast, and user-friendly product
              interfaces - from SaaS dashboards and internal tools to developer
              utilities and Chrome extensions. I care about performance,
              reusable frontend architecture, and UI details that make products
              feel polished.
            </p>
            <p className="text-muted text-lg leading-relaxed mt-6">
              Currently, I&apos;m working at Zones LLC, building enterprise SaaS
              applications with React, Angular, .NET API integrations, Contentful
              CMS, and Azure-based deployment workflows.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
