import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Education, TrainingTimeline, Certificates, Experience, FAQ, Contact, Footer } from "../components/sections";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <TrainingTimeline />
      <Certificates />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export function Layout() {
  return (
    <div className="relative">
      <Home />
    </div>
  );
}
