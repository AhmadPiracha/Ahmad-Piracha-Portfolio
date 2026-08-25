import { FileText, Github, Linkedin, Mail } from "lucide-react";
import TrackedLink from "@/components/portfolio/tracked-link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">
            Built and designed by Ahmad Piracha.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Frontend & Product Engineer based in Islamabad, Pakistan.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <TrackedLink
            href="https://github.com/AhmadPiracha"
            target="_blank"
            rel="noopener noreferrer"
            eventName="github_clicked"
            eventProperties={{ location: "footer" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </TrackedLink>
          <TrackedLink
            href="https://www.linkedin.com/in/ahmad-waseem-piracha/"
            target="_blank"
            rel="noopener noreferrer"
            eventName="linkedin_clicked"
            eventProperties={{ location: "footer" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </TrackedLink>
          <TrackedLink
            href="mailto:ahmadpiracha3@gmail.com"
            eventName="contact_clicked"
            eventProperties={{ method: "email", location: "footer" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </TrackedLink>
          <TrackedLink
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            eventName="resume_downloaded"
            eventProperties={{ location: "footer" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Resume"
          >
            <FileText size={16} />
          </TrackedLink>
        </div>
      </div>
    </footer>
  );
}
