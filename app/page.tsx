import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Leadership from "@/components/leadership";
import Contact from "@/components/contact";
import { SnackbarProvider } from "@/contexts/snackbar-context";

export default function Home() {
  return (
    <SnackbarProvider>
      <main className="min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Leadership />
        <Contact />
      </main>
    </SnackbarProvider>
  );
}
