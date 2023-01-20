import "../../styles/HeroSection.css";
import "../../styles/animations.scss";

export default function HeroSection() {

  return (
    <section id="home">
      <div className="fontfam hero-container">
        <div className="content-container">
          <p className={"intro-text animate__animated animate__bounceInDown"}>Hi, my name is</p>
          <p
            className={"title-text animate__animated animate__zoomInDown"}
            style={{ color: "var(--clr-title-1)" }}
          >
            Nikolaj De Smet.
          </p>
          <p
            className={"title-text animate__animated animate__zoomInDown"}
            style={{ color: "var(--clr-subtitle-1)" }}
          >
            I build what{" "}
            <span style={{ color: "var(--clr-accent-400)" }}>you</span> want.
          </p>
          <p
            className={"description-text animate__animated animate__bounceInLeft"}
            style={{ marginTop: "0.5em" }}
          >
            I'm a developper interested in lots of topics ranging from web
            development: front-end and back-end to low level programming in C,
            C++, machine learning in python or keeping myself up to date with
            useful technos like docker.{" "}
          </p>
          <p className={"description-text animate__animated animate__bounceInRight"}>
            And even if I don't know the technologies you want me too use, you
            can still contact me ! Maybe it's time for me to learn it ? Who
            knows ?
          </p>
          <a href="#contact-anchor" className={"cta-btn animate__animated animate__bounceInUp"}>
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
}