import "../../styles/HeroSection.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import MagneticButton from "../MagneticButton";
import { SITE } from "../../data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section id="home" className="hero section">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={item}>
            {SITE.role}
          </motion.span>

          <motion.h1 className="hero__name" variants={item}>
            {SITE.name}.
          </motion.h1>

          <motion.h2 className="hero__headline" variants={item}>
            I build what <span className="accent">you</span> want.
          </motion.h2>

          <motion.p className="hero__lead" variants={item}>
            Fullstack web &amp; DevOps engineer with 3+ years shipping production
            apps end-to-end — React/TypeScript frontends, Node/NestJS + GraphQL
            backends, and the Kubernetes clusters they run on. Currently lead
            engineer at LiveLinx.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <MagneticButton
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              className="btn btn-primary"
            >
              Let's work together
            </MagneticButton>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "projects")}
              className="btn btn-ghost"
            >
              View my work
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__card glass"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__card-bar">
            <span /><span /><span />
            <em>~/nikolaj</em>
          </div>
          <pre className="hero__code">
            <code>
{`const nikolaj = {
  role: "Fullstack & DevOps Engineer",
  now: "Lead Engineer @ LiveLinx",
  stack: ["React", "TypeScript", "GraphQL"],
  infra: ["Kubernetes", "Docker", "AWS"],
  status: "open to freelance",
};`}
            </code>
          </pre>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => scrollTo(e, "about")}
        className="hero__scroll"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
