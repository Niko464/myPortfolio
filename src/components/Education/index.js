import "../../styles/Education.scss";
import "../../styles/Hexagon.css";
import AppearOnScroll from "../AppearOnScroll";
import 'animate.css';

import BackgroundStarEffect from "../BackgroundStarEffect";

function generateTitle(title, highlight) {
  if (highlight) {
    return (
      <div className="wave-text">
        {
          title.split('').map((char, idx) => {
            return <span key={title + idx} style={{"--totalLetters": title.length, "--i": idx + 1}} className="title">{char === ' ' ? '\u00A0' : char}</span>;
          })
        }
      </div>
    );
  }
  return <span className="title">{title}</span>;
}

function YearObject({ idx, title, subtitle, body, logoTitle, highlight }) {
  return (
    <>
      <AppearOnScroll
        direction={idx % 2 !== 0 ? "Left" : "Right"}
        baseClasses="text-container"
        id={`year-${idx}-txt`}
      >
        {generateTitle(title, highlight)}
        <p className="subtitle">{subtitle}</p>
        <p className="body">{body}</p>
      </AppearOnScroll>
      <AppearOnScroll
        direction={idx % 2 === 0 ? "Left" : "Right"}
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
      <div className="container-80">
        <h2 className="section-title section-title-left">Education</h2>
        <div className="education-container">
          <YearObject
            idx={1}
            title="Epitech Toulouse - France"
            subtitle="Low Level Programming"
            body="The first year at epitech mainly focusses at building a deep technical foundation for the following years to come.
            We learn Memory management through C, The projects are mainly solo projects."
            logoTitle="1st Year"
          />
          <YearObject
            idx={2}
            title="Epitech Toulouse - France"
            subtitle="Team work && Object Oriented Programming"
            body="The second year is about OOP and it's advantages, we only do team projects so that we would learn to work as a team.
                  We also dive into thread programming and DevOps. With different kinds of projects, we learn to adapt to different situations."
            logoTitle="2nd Year"
          />
          <YearObject
            idx={3}
            title="Epitech Toulouse - France"
            subtitle="Web Programming && Even more team work"
            body="The third year is about web programming, we learn to build a web application using the technologies of the moment. The projects are also team projects.
                  We also start an Entrepreneurial project, where we have to build a business plan and a prototype of a product. (This project lasts until the end of the 5th year)"
            logoTitle="3rd Year"
          />
          <YearObject
            idx={4}
            title="Tsinghua University - China"
            subtitle="Year Abroad"
            body="This is in my opinion the most important year of my education. I spent a year in one of the TOP universities of the world studying different kinds of topics
            such as Distributed Database systems, Machine learning, Big data systems, Combinatorics & algorithm etc.
            I am honored to have been able to study in such a prestigious university."
            logoTitle="4th Year"
            highlight={true}
          />
          <YearObject
            idx={5}
            title="Epitech Toulouse - France"
            subtitle="Specialization && Entrepreneurship"
            body="The final year is about specialization, we choose a track and we focus on it. We also have a final internship the last 6 months of the year. Even though
            the goal of this year is to specialize, we still have our entrepreneurial project that we have to finish."
            logoTitle="5th Year"
          />
        </div>
      </div>
    </section>
  );
}
