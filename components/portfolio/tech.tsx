"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { technologies, categoryMeta } from "@/lib/constants";

function TechCategory({ category, index }: { category: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const meta = categoryMeta[category] || { label: category };

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{meta.label}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies[category].map((tech) => (
          <span key={tech.name} className="px-3 py-1.5 text-sm text-muted bg-card border border-card-border rounded-md hover:text-foreground hover:border-accent/30 transition-colors cursor-default">
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Tech() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">What I work with</p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">Technologies</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.keys(technologies).map((category, index) => (
            <TechCategory key={category} category={category} index={index} />
          ))}
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
