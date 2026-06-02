import "../../styles/About.css";
import { motion } from "framer-motion";
import Reveal, { stagger, staggerItem } from "../Reveal";
import SectionHeading from "../SectionHeading";
import { STATS, LANGUAGES } from "../../data/site";

const TECH = [
  "TypeScript", "React", "Node.js", "NestJS", "GraphQL", "PostgreSQL",
  "Redis", "Prisma", "Docker", "Kubernetes", "AWS", "Tailwind", "Python", "C++",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Builds it end-to-end,"
              accent="frontend to infra."
            />
            <Reveal className="about__text" delay={0.05}>
              <p>
                I'm a fullstack web and DevOps engineer who likes taking things
                end-to-end — from a polished React/TypeScript frontend, through a
                Node/NestJS + GraphQL backend, down to the Kubernetes cluster and
                Linux servers it all runs on. Right now I'm the lead engineer at
                LiveLinx, working on a digital learning platform for the medical
                sector.
              </p>
              <p>
                Away from client work I keep exploring — AI, genetic algorithms,
                low-level C/C++ — because building things I've never built before
                is how I stay sharp. Don't see your exact stack? I'll happily pick
                it up.
              </p>
            </Reveal>

            <Reveal className="about__tech" delay={0.1}>
              <span className="about__tech-label">Tools I reach for</span>
              <motion.ul
                className="about__pills"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {TECH.map((t) => (
                  <motion.li key={t} className="tag" variants={staggerItem}>
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>

            <Reveal className="about__langs" delay={0.15}>
              <span className="about__tech-label">Speaks</span>
              <div className="about__lang-row">
                {LANGUAGES.map((l) => (
                  <span key={l.name} className="about__lang">
                    {l.name} <em>{l.level}</em>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div
            className="about__stats"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {STATS.map((s) => (
              <motion.div key={s.label} className="about__stat glass" variants={staggerItem}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
