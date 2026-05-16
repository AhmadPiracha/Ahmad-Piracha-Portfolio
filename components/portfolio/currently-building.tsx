"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { currentlyBuilding } from "@/lib/constants";

export default function CurrentlyBuilding() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section className="scroll-mt-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
            Side products / experiments
          </p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">
            Currently Building
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentlyBuilding.map((item, index) => (
            <a
              key={item.name}
              href={`/projects/${item.slug}`}
              className={`group rounded-xl border border-card-border bg-card p-5 transition-all duration-500 hover:border-accent/30 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-semibold group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
