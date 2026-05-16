"use client";

import { useRef } from "react";
import { Boxes, Chrome, Code2, LayoutDashboard } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { services } from "@/lib/constants";

const icons = [LayoutDashboard, Boxes, Code2, Chrome];

export default function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="build" className="scroll-mt-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
            Product focus
          </p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">
            What I Build
          </h2>
          <p className="mt-4 text-muted text-base max-w-2xl leading-relaxed">
            I help turn product ideas into clean, fast, and production-ready
            interfaces.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = icons[index] || Code2;

            return (
              <div
                key={service.title}
                className={`rounded-xl border border-card-border bg-card p-5 transition-all duration-500 hover:border-accent/30 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="w-10 h-10 rounded-lg border border-card-border bg-surface flex items-center justify-center text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-foreground font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
