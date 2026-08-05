import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Impact } from "@/components/Impact";
import { Publications } from "@/components/Publications";
import { AwardsAndCerts } from "@/components/AwardsAndCerts";
import { TechStack } from "@/components/TechStack";
import { GitHub } from "@/components/GitHub";
import { Testimonials } from "@/components/Testimonials";
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
        <Projects />
        <Skills />
        <Impact />
        <Publications />
        <AwardsAndCerts />
        <TechStack />
        <GitHub />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
