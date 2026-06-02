import "../../styles/Skills.css";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { stagger, staggerItem } from "../Reveal";

import architecture_logo from "./pictures/architecture.png";
import ai_logo from "./pictures/ai.png";
import big_data_logo from "./pictures/big-data.png";
import programming_logo from "./pictures/oop.png";
import web_logo from "./pictures/web-programming.png";

const skills = [
  {
    name: "Software Architecture",
    logo: architecture_logo,
    description:
      "I really like architecturing how software is built — on different levels, both the code architecture and the system architecture.",
    size: "wide",
  },
  {
    name: "Web Development",
    logo: web_logo,
    description:
      "Frontend and backend web development using React, Node, Express, MongoDB, and more.",
    size: "wide",
  },
  {
    name: "Artificial Intelligence",
    logo: ai_logo,
    description:
      "Multiple projects across NLP, genetic algorithms and object detection — usually with Python, TensorFlow and Keras.",
  },
  {
    name: "Big Data",
    logo: big_data_logo,
    description:
      "Set up a distributed database environment to help with scalability, availability and reliability.",
  },
  {
    name: "Object Oriented Programming",
    logo: programming_logo,
    description:
      "One of my favorite ways of thinking and coding. I love C++.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I love to"
          accent="work on."
          lead="A handful of areas I keep coming back to — and keep getting better at."
        />

        <motion.div
          className="skills__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map((skill) => (
            <motion.article
              key={skill.name}
              className={`skill-card glass ${skill.size === "wide" ? "skill-card--wide" : ""}`}
              variants={staggerItem}
            >
              <div className="skill-card__icon">
                <img src={skill.logo} alt="" />
              </div>
              <h3 className="skill-card__title">{skill.name}</h3>
              <p className="skill-card__desc">{skill.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
