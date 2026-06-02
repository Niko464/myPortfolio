import ReactModal from "react-modal";
import "../../styles/ProjectModal.css";
import { FaTimes, FaGithub } from "react-icons/fa";
import Slider from "react-slick";

export default function ProjectModal({
  isOpen,
  setIsOpen,
  pictures,
  description,
  githubLink,
  title,
}) {
  const isVideo = (src) => /\.mp4($|\?)/i.test(src);
  const hasVideo = pictures.some(isVideo);

  const carouselSettings = {
    className: "project-modal-carousel",
    dots: true,
    infinite: pictures.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: pictures.length > 1,
    autoplay: !hasVideo && pictures.length > 1,
    autoplaySpeed: 4000,
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      className="project-modal"
      overlayClassName="project-modal-overlay"
      closeTimeoutMS={200}
    >
      <button className="project-modal__close" onClick={() => setIsOpen(false)} aria-label="Close">
        <FaTimes />
      </button>

      <div className="project-modal__media">
        <Slider {...carouselSettings}>
          {pictures.map((media, index) => (
            <div key={"slide-" + index} className="project-modal__slide">
              {isVideo(media) ? (
                <video src={media} controls autoPlay loop muted playsInline preload="metadata" />
              ) : (
                <img src={media} alt={`${title} screenshot ${index + 1}`} />
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className="project-modal__body">
        <h2 className="project-modal__title">{title}</h2>
        <p className="project-modal__desc">{description}</p>

        {githubLink ? (
          <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FaGithub /> View source
          </a>
        ) : (
          <p className="project-modal__note">Sorry, the source code for this project isn't public.</p>
        )}
      </div>
    </ReactModal>
  );
}
