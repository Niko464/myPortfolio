import "../../styles/ProjectCard.css";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import ProjectModal from "../ProjectModal";
import { staggerItem } from "../Reveal";

export default function ProjectCard({ project, isOpen, onOpen, onClose }) {
  const { title, desc, previewImg, tags, featured, hasImage, githubLink } = project;

  return (
    <>
      <motion.article
        className={`pcard glass ${featured ? "pcard--featured" : ""} ${
          hasImage ? "pcard--image" : "pcard--text"
        }`}
        variants={staggerItem}
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      >
        {hasImage && (
          <div
            className="pcard__media"
            style={{ backgroundImage: `url(${previewImg})` }}
          />
        )}
        <div className="pcard__overlay" />

        <div className="pcard__content">
          <ul className="pcard__tags">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
          <h3 className="pcard__title">{title}</h3>
          <p className="pcard__desc">{desc}</p>
          <div className="pcard__footer">
            <span className="pcard__more">
              Details <FaArrowRight />
            </span>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="pcard__gh"
                aria-label="View source on GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      <ProjectModal
        isOpen={isOpen}
        setIsOpen={(v) => (v ? onOpen() : onClose())}
        pictures={project.presentationImages}
        description={project.longDescription}
        githubLink={githubLink}
        title={title}
      />
    </>
  );
}
