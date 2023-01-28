import ReactModal from "react-modal";
import "../../styles/ProjectModal.css"
import { FaTimes } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Slider from "react-slick";

export default function ProjectModal({
    isOpen,
    setIsOpen,
    pictures,
    description,
    githubLink,
    title
}) {

  const carousselSettings = {
    className: "project-modal-carroussel",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSide: 0,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 6000,
        }
      }
    ]
  };
  return (
    <ReactModal
      isOpen={isOpen}
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      <div className="project-modal-container">
        <FaTimes onClick={() => setIsOpen(false)} className="close-btn" />
        <Slider {...carousselSettings}>
          {
            pictures.map((img, index) => {
              return (
                <div key={"carroussel " + index} className="img-container">
                  <img src={img} alt=""/>
                </div>
              )
            })
          }
        </Slider>
        <h2>{title}</h2>
        <p>{description}</p>
        {
          githubLink &&
          <BsGithub style={{paddingBottom: "25px"}} onClick={() => window.open(githubLink, "_blank")} className="github-btn"/>
        }
        {
          !githubLink &&
          <p>Sorry the source code for this project isn't public...</p>
        }
      </div>
    </ReactModal>
  )
}