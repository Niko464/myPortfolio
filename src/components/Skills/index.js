
import "../../styles/Skills.css";

const skills = [
  "C",
  "C++",
  "Python",
  // "Javascript",
  // "React",
  // "Docker",
  // "Git",
  // "Artificial Intelligence",
  // "Machine Learning",
  // "Big Data",
  // "Distributed Databases",
  // "HDFS",
  // "MongoDB",
  // "Fastify"
]
let totalLetters = 0;

export default function Skills() {
  return (
    <section id="skills">
      <div className="container-60">
        <h2 className="section-title section-title-left">Skills</h2>
        <div className="skills-container">
          {
            
            skills.map((skill, idx) => {
              if (idx === 0)
                totalLetters = 0;
              totalLetters += skill.length;
              return (
                <div key={skill + idx} className="skill" style={{"--delay": totalLetters - skill.length}}>
                  <span className="skill-title">{skill}</span>
                </div>
              );
            })
          }
        </div>
      </div>
  </section>
  );
}
