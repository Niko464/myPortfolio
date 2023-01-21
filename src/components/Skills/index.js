import Slider from 'react-slick';
import '../../styles/Skills.css';

import architecture_logo from "./pictures/architecture.png"
import ai_logo from "./pictures/ai.png"
import big_data_logo from "./pictures/big-data.png"
import programming_logo from "./pictures/oop.png"
import web_logo from "./pictures/web-programming.png"

export default function Skills() {
  const settings = {
    className: "skills-container",
    // centerMode: true,
    // centerPadding: "250px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSide: 0,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    appendDots: dots => (
      <div>
        <ul className='dots-list'> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  const skills = [
    {
      name: "Software Architecture",
      logo: architecture_logo,
      description: "I really like architecturing how software is built. On different levels both the code architecture and the system architecture."
    },
    {
      name: "Web Development",
      logo: web_logo,
      description: "Frontend and Backend Web Development using React, Node, Express, MongoDB, and more."
    },
    {
      name: "Artificial Intelligence",
      logo: ai_logo,
      description: "I've done multiple projects on AI including NLP, Genetic Algorithms, Object Detection. I usually worked with Python, Tensorflow, and Keras."
    },
    {
      name: "Big Data",
      logo: big_data_logo,
      description: "One of my projects consisted of setting up a distributed databases environment to help with scalability availability and reliability."
    },
    {
      name: "Object Oriented Programming",
      logo: programming_logo,
      description: "This way of coding and thinking is one of my favorites. I love C++"
    }
  ]
  return (
    <>
      <section id="skills" style={{position: "relative"}}>
        <div className="container-60">
        <h2 className="section-title section-title-left">Skills</h2>
        </div>
      </section>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "75vh"}}>
        <Slider {...settings}>
          {
            skills.map((skill, index) => {
              return (
                <div key={"skill " + index} className="skill">
                  <div className="skill-img-container">
                    <img src={skill.logo} alt={skill.name} />
                  </div>
                  <div className="skill-text-container">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  )
}