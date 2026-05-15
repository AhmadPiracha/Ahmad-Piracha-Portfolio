import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Experience from "@/components/portfolio/experience";
import Tech from "@/components/portfolio/tech";
import Projects from "@/components/portfolio/projects";
import Certifications from "@/components/portfolio/certifications";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
