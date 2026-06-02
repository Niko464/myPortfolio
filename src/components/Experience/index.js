import "../../styles/Experience.css";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const experience = [
  {
    role: "Lead Engineer",
    company: "LiveLinx",
    kind: "Freelance",
    period: "Apr 2023 – Present",
    location: "Remote",
    current: true,
    bullets: [
      "Lead engineer for LiveLinx's digital learning platform for the medical sector — where hospitals and clinicians build training content and run live in-person events — working across the whole stack: frontend, backend and infrastructure.",
      "Build and maintain the product with React, TypeScript and GraphQL on AWS.",
      "Operate production infrastructure: administer a Kubernetes cluster and Linux servers, handling deployments, scaling, monitoring and reliability.",
    ],
    stack: ["React", "TypeScript", "GraphQL", "Node.js", "AWS", "Kubernetes", "Docker", "Linux"],
  },
  {
    role: "Fullstack Developer",
    company: "reno.energy",
    kind: "Freelance",
    period: "2024 · 1 month",
    location: "Remote",
    bullets: [
      "Designed and built a public quote simulator (reno.energy/simulateur) letting customers configure their installation and request a quote online.",
    ],
    stack: ["React", "TypeScript"],
  },
  {
    role: "Fullstack Developer",
    company: "Natan",
    kind: "Freelance",
    period: "Nov 2024 – May 2025 · 6 months",
    location: "Remote",
    bullets: [
      "Built an internal product-management tool (app.natan.be) to centrally track products, variants, pricing and imagery alongside customers and sales.",
    ],
    stack: ["React", "TypeScript", "GraphQL"],
  },
  {
    role: "Applications Developer",
    company: "RTech",
    kind: "Internship",
    period: "Apr 2022 · 4 months",
    location: "On-site",
    bullets: [
      "Built an ML application detecting small contaminants in jam on a conveyor belt and removing them in real time via object tracking and a robotic arm.",
    ],
    stack: ["Python", "Machine Learning", "Computer Vision"],
  },
  {
    role: "Applications Developer",
    company: "RTech",
    kind: "Internship",
    period: "Aug 2020 · 4 months",
    location: "On-site",
    bullets: [
      "Developed a C++/Qt desktop GUI for software simulating the atmospheric re-entry of satellites.",
    ],
    stack: ["C++", "Qt"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          accent="shipped."
          lead="From a robotics internship to leading a production platform — building software people actually rely on."
        />

        <div className="xp">
          {experience.map((job, i) => (
            <Reveal
              key={job.company + job.period}
              className={`xp__card glass ${job.current ? "xp__card--current" : ""}`}
              delay={i * 0.05}
            >
              <div className="xp__head">
                <div className="xp__title">
                  <h3>
                    {job.role} <span className="xp__at">·</span>{" "}
                    <span className="xp__company">{job.company}</span>
                  </h3>
                  <span className="xp__kind">{job.kind}</span>
                  {job.current && <span className="xp__live">Current</span>}
                </div>
                <div className="xp__meta">
                  <span>{job.period}</span>
                  <span className="xp__dot">•</span>
                  <span>{job.location}</span>
                </div>
              </div>

              <ul className="xp__bullets">
                {job.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>

              <ul className="xp__stack">
                {job.stack.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
