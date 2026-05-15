"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { stats } from "@/lib/constants";

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

        <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className={`flex-1 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-muted text-lg leading-relaxed">
              Software Engineer with 3+ years of experience building scalable
              web and mobile applications using React.js, React Native, and
              TypeScript. Experienced in developing SaaS and product-driven
              platforms, integrating REST APIs, and delivering high-quality user
              interfaces in agile teams.
            </p>
            <p className="text-muted text-lg leading-relaxed mt-6">
              Strong focus on performance optimization, reusable components, and
              modern frontend architecture. Currently working at Zones LLC,
              building enterprise SaaS applications with React and Angular.
            </p>
          </div>

          <div className={`flex flex-row lg:flex-col gap-8 lg:gap-6 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-bold text-foreground font-mono">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
