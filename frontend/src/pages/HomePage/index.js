import HeroSection from "../../components/HeroSection";
import "../../styles/HomePage.css";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import Education from "../../components/Education";
import Navigation from "../../components/Navigation";

import Shit from "./testImg.png";
import Shit2 from "./secTestImg.png";

import "../../styles/Backgrounds.css";
import { useEffect } from "react";

export default function HomePage() {

  return (
    <div className="content">
      <Navigation />
      <HeroSection />
      <div id="education-anchor" className="spacer" />
      <Education />
      <div id="projects-anchor" className="spacer" />
      <section id="projects">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className="bg-image bg-circle"
        >
          <ProjectCard
            title="Super cool project"
            desc="Lorem upsum, dolor sit amet aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaacons aaaaaaaaaaaa aaaaaaaaaa aaaaaaaectuesgsg sdgsdgsdgsdg elit. Fuga placeat odio pariatur doloribus sint?"
            img={Shit}
            ctaName="learn more"
            onClickFunc={() => {
              alert("aaa");
            }}
          />

          <ProjectCard
            title="Super cool project"
            desc="Lorem upsur doloribus sint?"
            img={Shit2}
            ctaName="learn more"
            onClickFunc={() => {
              alert("aaa");
            }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
