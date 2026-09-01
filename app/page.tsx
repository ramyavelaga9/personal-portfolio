import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Recognition } from "@/components/Recognition";
import { GitHub } from "@/components/GitHub";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Impact />
        <Projects />
        <Skills />
        <Recognition />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
