import "../../styles/Education.scss";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const timeline = [
  {
    year: "1st Year",
    place: "Epitech Toulouse — France",
    subtitle: "C Programming && Memory Management",
    body: "The first year at Epitech mainly focuses on building a deep technical foundation for the years to come. We learn memory management through C; the projects are mainly solo projects.",
  },
  {
    year: "2nd Year",
    place: "Epitech Toulouse — France",
    subtitle: "Team work && Object Oriented Programming",
    body: "The second year is about OOP and its advantages — we only do team projects so that we learn to work as a team. We also dive into thread programming and DevOps. With different kinds of projects, we learn to adapt to different situations.",
  },
  {
    year: "3rd Year",
    place: "Epitech Toulouse — France",
    subtitle: "Web Programming && Even more team work",
    body: "The third year is about web programming — we learn to build a web application using the technologies of the moment. The projects are also team projects. We also start an entrepreneurial project, where we build a business plan and a prototype of a product (this project lasts until the end of the 5th year).",
  },
  {
    year: "4th Year",
    place: "Tsinghua University — China",
    subtitle: "Year Abroad",
    body: "This is, in my opinion, the most important year of my education. I spent a year in one of the top universities in the world studying topics such as distributed database systems, machine learning, big data systems, combinatorics & algorithms, and more. I am honored to have been able to study in such a prestigious university.",
    highlight: true,
  },
  {
    year: "5th Year",
    place: "Epitech Toulouse — France",
    subtitle: "Specialization && Entrepreneurship",
    body: "The final year is about specialization — we choose a track and focus on it. We also have a final internship over the last 6 months of the year. Even though the goal of this year is to specialize, we still have our entrepreneurial project to finish.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Five years,"
          accent="two countries."
          lead="A path from low-level C in Toulouse to distributed systems and machine learning at Tsinghua."
        />

        <div className="timeline">
          {timeline.map((entry, i) => (
            <Reveal
              key={entry.year}
              className={`timeline__item ${entry.highlight ? "timeline__item--highlight" : ""}`}
              delay={i * 0.05}
            >
              <div className="timeline__node">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__card glass">
                <div className="timeline__head">
                  <span className="timeline__year">{entry.year}</span>
                  {entry.highlight && (
                    <span className="timeline__badge">Year Abroad ✦</span>
                  )}
                </div>
                <h3 className="timeline__place">{entry.place}</h3>
                <p className="timeline__subtitle">{entry.subtitle}</p>
                <p className="timeline__body">{entry.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
