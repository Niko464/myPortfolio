import Navigation from "../../components/Navigation";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Education from "../../components/Education";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
