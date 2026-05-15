"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { experiences, education } from "@/lib/constants";

interface TimelineItem {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  points: string[];
}

function ExperienceCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`group relative flex gap-6 pb-10 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-card-border bg-card flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors overflow-hidden">
          <Image src={item.icon} alt={item.company_name} width={20} height={20} className="w-5 h-5 object-contain" />
        </div>
        <div className="flex-1 w-px bg-card-border mt-2" />
      </div>

      <div className="flex-1 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">{item.title}</h3>
            <p className="text-muted text-sm">{item.company_name}</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{item.date}</span>
        </div>
        <ul className="flex flex-col gap-2">
          {item.points.map((point, i) => (
            <li key={i} className="text-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-card-border">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">{label}</p>
      <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">{title}</h2>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <SectionHeading label="Where I've worked" title="Experience" />
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} index={index} />
          ))}
        </div>

        <div className="mt-8">
          <SectionHeading label="Academic background" title="Education" />
          <div className="mt-12">
            {education.map((edu, index) => (
              <ExperienceCard key={index} item={edu} index={index} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-card-border mt-8" />
      </div>
    </section>
  );
}
