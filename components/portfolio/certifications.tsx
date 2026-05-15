"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { certificates } from "@/lib/constants";

function CertCard({ cert, index }: { cert: typeof certificates[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref);

  return (
    <a
      ref={ref}
      href={cert.source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl border border-card-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface">
        <Image src={cert.image} alt={cert.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <h3 className="text-foreground font-semibold text-sm group-hover:text-accent transition-colors">{cert.name}</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {cert.tags.map((tag) => (
            <span key={`${cert.name}-${tag.name}`} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface text-muted-foreground border border-card-border">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div ref={ref} className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">What I learned</p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">Certificates</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, index) => (
            <CertCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
