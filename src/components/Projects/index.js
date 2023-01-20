
import "../../styles/Contact.css";
import AppearOnScroll from "../AppearOnScroll";
import ProjectCard from "../ProjectCard";

import Shit from "./testImg.png";
import Shit2 from "./secTestImg.png";

export default function Projects() {
  return (
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
  );
}
