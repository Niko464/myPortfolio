import "../../styles/Education.scss";
import "../../styles/Hexagon.css";
import AppearOnScroll from "../AppearOnScroll";

import BackgroundStarEffect from "../BackgroundStarEffect";

function YearObject({ idx, title, subtitle, body, logoTitle }) {
  return (
    <>
      <AppearOnScroll
        direction={idx % 2 !== 0 ? "left" : "right"}
        baseClasses="text-container"
        id={`year-${idx}-txt`}
      >
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <p className="body">{body}</p>
      </AppearOnScroll>
      <AppearOnScroll
        direction={idx % 2 === 0 ? "left" : "right"}
        baseClasses="hex-container"
        id={`year-${idx}-logo`}
      >
        <div className="hex">
          <span className="idx">{logoTitle}</span>
        </div>
      </AppearOnScroll>
    </>
  );
}

export default function Education() {
  return (
    <section id="education">
      <BackgroundStarEffect />
      <div className="container-60">
        <h2 className="section-title section-title-left">Education</h2>
        <div className="education-container">
          <YearObject
            idx={1}
            title="Epitech Toulouse - France"
            subtitle="Low Level Programming"
            body="The first year at epitech mainly focusses at building a deep technical foundation for the following years to come.
            **blablabla TODO**"
            logoTitle="1st Year"
          />
          <YearObject
            idx={2}
            title="Epitech Toulouse - France"
            subtitle="Team work && Object Oriented Programming"
            body="The second year is about OOP and it's advantages, we only do team projects so that we would learn to work as a team.
                  We also dive into thread programming and DevOps.
                  **blablabla TODO**"
            logoTitle="2nd Year"
          />
          <YearObject
            idx={3}
            title="Epitech Toulouse - France"
            subtitle="Web Programming && Even more team work"
            body="**blablabla TODO**"
            logoTitle="3rd Year"
          />
          <YearObject
            idx={4}
            title="Tsinghua University - China"
            subtitle="Low Level Programming"
            body="Year abroad as an exchange student.
            **blablabla TODO**"
            logoTitle="4th Year"
          />
          <YearObject
            idx={5}
            title="Epitech Toulouse - France"
            subtitle="Low Level Programming"
            body="**blablabla TODO**"
            logoTitle="5th Year"
          />
        </div>
      </div>
    </section>
  );
}
