import HeroSection from "../../components/HeroSection";
import "../../styles/HomePage.css";
import Footer from "../../components/Footer";
import Education from "../../components/Education";
import Navigation from "../../components/Navigation";
import "../../styles/Backgrounds.css";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function HomePage() {

  /*
  I should not have to touch anymore to: Navigation, HeroSection, Education, Contact, Footer
  */
  return (
    <div className="content">
      <Navigation />
      <HeroSection />
      <div id="education-anchor" className="spacer" />
      <Education />
      <div id="skills-anchor" className="spacer" />
      <Skills />
      {/* <div id="projects-anchor" className="spacer" />
      <Projects /> */}
      <div id="contact-anchor" className="spacer" />
      <Contact/>
      
      <Footer />
    </div>
  );
}
