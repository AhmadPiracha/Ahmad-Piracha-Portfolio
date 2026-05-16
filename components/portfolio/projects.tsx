"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useInView } from "@/hooks/use-in-view";
import { projects, type Project } from "@/lib/constants";

const filters = [
  "All",
  "Featured",
  "SaaS",
  "Developer Tools",
  "Chrome Extensions",
  "Frontend",
  "Full Stack",
  "UI Animation",
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const hasImage = project.image && project.image !== "";
  const initial = project.name.charAt(0).toUpperCase();

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-card-border bg-card overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.15)] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-accent text-accent-foreground text-[10px] font-mono font-semibold rounded-full uppercase tracking-wider">
          Featured
        </div>
      )}

      <div className="relative w-full h-52 overflow-hidden bg-surface">
        {hasImage ? (
          <Image
            src={project.image!}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-surface">
            <span className="text-6xl font-bold text-muted-foreground/20 font-mono select-none">{initial}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300">
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <FaExternalLinkAlt size={14} />
            </a>
          )}
          {project.source_code_link && (
            <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${project.name}`} className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-foreground font-semibold text-base group-hover:text-accent transition-colors">{project.name}</h3>
        </div>
        <p className="mt-1 text-muted-foreground text-xs font-mono">
          {project.positioning}
        </p>
        <p className="mt-4 text-muted text-sm leading-relaxed line-clamp-3">{project.description}</p>

        <div className="mt-4 rounded-lg border border-card-border bg-surface p-3">
          <p className="text-[11px] font-mono uppercase tracking-wider text-accent">
            Problem
          </p>
          <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
            {project.problem}
          </p>
          <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-accent">
            Key feature
          </p>
          <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
            {project.keyFeature}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.trustDetails.map((detail) => (
            <span key={`${project.name}-${detail}`} className="text-[10px] px-2 py-1 rounded-md bg-accent-muted text-accent border border-accent/10">
              {detail}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={`${project.name}-${tech}`} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface text-muted-foreground border border-card-border">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md bg-accent text-accent-foreground text-xs font-medium hover:bg-accent/90 transition-colors">
              Live Demo
            </a>
          )}
          {project.caseStudySlug && (
            <a href={`/projects/${project.caseStudySlug}`} className="px-3 py-2 rounded-md border border-card-border text-foreground text-xs font-medium hover:bg-surface transition-colors">
              Case Study
            </a>
          )}
          {project.source_code_link && (
            <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md border border-card-border text-muted text-xs font-medium hover:text-foreground hover:bg-surface transition-colors">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.includes(activeFilter);
  });

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleProjects(6);
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div ref={headingRef} className={`transition-all duration-700 ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">My work</p>
          <h2 className="font-sans font-bold text-foreground text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2">Projects</h2>
        </div>

        <p className={`mt-4 text-muted text-base max-w-2xl leading-relaxed transition-all duration-700 delay-100 ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          A selection of projects that showcase my skills across frontend development, full-stack applications, and developer tools.
        </p>

        <div className={`mt-8 flex flex-wrap gap-2 transition-all duration-700 delay-150 ${headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card text-muted border-card-border hover:text-foreground hover:border-accent/30"
              }`}
            >
              {filter}
              {filter !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  {filter === "Featured"
                    ? projects.filter((p) => p.featured).length
                    : projects.filter((p) => p.categories.includes(filter)).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm font-mono">No projects found for this filter.</p>
          </div>
        )}

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2.5 text-sm font-medium text-muted border border-card-border rounded-lg hover:text-foreground hover:border-accent/30 hover:bg-card transition-all"
            >
              Load More
              <span className="ml-2 text-xs text-muted-foreground">
                ({filteredProjects.length - visibleProjects} remaining)
              </span>
            </button>
          </div>
        )}

        <div className="w-full h-px bg-card-border mt-16" />
      </div>
    </section>
  );
}
