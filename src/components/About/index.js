import "../../styles/About.css";
import { motion } from "framer-motion";
import Reveal, { stagger, staggerItem } from "../Reveal";
import SectionHeading from "../SectionHeading";
import { STATS } from "../../data/site";

const TECH = [
  "React", "Node", "Express", "MongoDB", "C", "C++", "Python",
  "TensorFlow", "Keras", "Qt", "Docker", "Fastify",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Curious by default,"
              accent="builder by habit."
            />
            <Reveal className="about__text" delay={0.05}>
              <p>
                I'm a developer interested in lots of topics — ranging from web
                development, front-end and back-end, to programming in C, C++ and
                Python for machine learning, and keeping up to date with useful
                technologies like Docker.
              </p>
              <p>
                And even if I don't know the technology you'd like me to use, you
                can still reach out — maybe it's the perfect time for me to learn
                it. Who knows?
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
