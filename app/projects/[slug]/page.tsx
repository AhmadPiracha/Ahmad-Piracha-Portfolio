import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projectCaseStudies, projects } from "@/lib/constants";

type CaseStudySlug = keyof typeof projectCaseStudies;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(projectCaseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = projectCaseStudies[slug as CaseStudySlug];

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} Case Study | Ahmad Piracha`,
    description: study.overview,
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const study = projectCaseStudies[slug as CaseStudySlug];

  if (!study) {
    notFound();
  }

  const project = projects.find((item) => item.caseStudySlug === slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <header className="mt-12">
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-widest">
            Case Study
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {study.title}
          </h1>
          {project && (
            <p className="mt-4 text-lg text-muted max-w-3xl leading-relaxed">
              {project.positioning}
            </p>
          )}
          {project && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.trustDetails.map((detail) => (
                <span
                  key={detail}
                  className="px-3 py-1.5 rounded-md border border-accent/10 bg-accent-muted text-accent text-xs"
                >
                  {detail}
                </span>
              ))}
            </div>
          )}
        </header>

        {project?.image && (
          <div className="mt-10 relative aspect-[16/9] overflow-hidden rounded-xl border border-card-border bg-card">
            <Image
              src={project.image}
              alt={`${study.title} product preview`}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <article className="space-y-12">
            <CaseSection title="Project Overview" body={study.overview} />
            <CaseSection title="Problem" body={study.problem} />
            <CaseSection title="Solution" body={study.solution} />

            <section>
              <h2 className="text-2xl font-semibold text-foreground">
                Key Features
              </h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-card-border bg-card p-4 text-sm text-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <CaseSection title="Technical Decisions" body={study.technical} />
            <CaseSection title="UI/UX Decisions" body={study.ux} />
            <CaseSection title="Challenges" body={study.challenges} />
            <CaseSection title="Result" body={study.result} />

            <section>
              <h2 className="text-2xl font-semibold text-foreground">
                Screenshots
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.screenshots.map((screenshot, index) => (
                  <div
                    key={`${screenshot}-${index}`}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-card-border bg-card"
                  >
                    <Image
                      src={screenshot}
                      alt={`${study.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24 h-fit rounded-xl border border-card-border bg-card p-5">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              Built with
            </h2>
            {project && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-surface border border-card-border text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3">
              {study.links.live && (
                <a
                  href={study.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
              {study.links.github && (
                <a
                  href={study.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface transition-colors"
                >
                  GitHub
                  <Github size={14} />
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-4 text-muted leading-relaxed">{body}</p>
    </section>
  );
}
