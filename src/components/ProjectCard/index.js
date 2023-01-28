import "../../styles/ProjectCard.css";
import { useState } from "react";
import ProjectModal from "../ProjectModal";

export default function ProjectCard({
  img,
  title,
  desc,
  presentationImages,
  longDescription,
  githubLink,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card-container">
        <div className="card" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-body">{desc}</p>
            <button
              className="button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pictures={presentationImages}
        description={longDescription}
        githubLink={githubLink}
        title={title}/>
    </>
  );
}
