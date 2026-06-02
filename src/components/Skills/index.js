import "../../styles/Skills.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaMicrochip,
} from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { stagger, staggerItem } from "../Reveal";

const skills = [
  {
    name: "Frontend",
    Icon: FaLaptopCode,
    description:
      "Fast, accessible interfaces in React & TypeScript — with Tailwind, shadcn/ui and MUI, and state via React Query, Zustand or Redux.",
  },
  {
    name: "Backend & APIs",
    Icon: FaServer,
    description:
      "Services and APIs with Node.js, NestJS, Express and Fastify — GraphQL (Apollo, type-graphql) and REST.",
  },
  {
    name: "DevOps & Infrastructure",
    Icon: FaCloud,
    description:
      "Running production on Kubernetes, Docker and AWS — Linux servers, CI/CD, deployments, scaling and monitoring.",
  },
  {
    name: "Databases",
    Icon: FaDatabase,
    description:
      "Modeling and querying with PostgreSQL, MongoDB and Redis via Prisma and TypeORM — plus distributed storage with HDFS.",
  },
  {
    name: "Machine Learning",
    Icon: FaBrain,
    description:
      "Hands-on ML and computer vision in Python — NLP, object detection and genetic algorithms.",
  },
  {
    name: "Systems & Lower-level",
    Icon: FaMicrochip,
    description:
      "Comfortable down low: C & C++, multithreading, network/socket programming and Qt desktop apps.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="The full"
          accent="stack."
          lead="End-to-end — from the pixels in the browser to the cluster running it all."
        />

        <motion.div
          className="skills__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map((skill) => (
            <motion.article key={skill.name} className="skill-card glass" variants={staggerItem}>
              <div className="skill-card__icon">
                <skill.Icon />
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
