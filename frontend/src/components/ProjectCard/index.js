import "../../styles/ProjectCard.css";

export default function ProjectCard({
  img,
  title,
  desc,
  ctaName,
  onClickFunc,
}) {
  return (
    <div className="card-container">
      <div className="card" style={{ backgroundImage: `url(${img})` }}>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-body">{desc}</p>
          <button
            className="button"
            onClick={() => {
              onClickFunc();
            }}
          >
            {ctaName}
          </button>
        </div>
      </div>
    </div>
  );
}
