import "../../styles/HeroSection.css";
import "../../styles/animations.scss";

export default function HeroSection() {
  const slides = [
    "slideTopRight",
    "slideTopLeft",
    "slideLeft",
    "slideRight",
    "slideBottomLeft",
    "slideBottomRight",
  ];
  // let counter = 1;

  function addRandomSlide(currentClasses) {
    // currentClasses += " slideLeft"
    // currentClasses += " delay-" + String(counter)
    currentClasses += " " + slides[Math.floor(Math.random() * slides.length)];
    // counter += 1;
    return currentClasses;
  }

  return (
    <section id="home">
      <div className="fontfam hero-container">
        <div className="content-container">
          <p className={addRandomSlide("intro-text")}>Hi, my name is</p>
          <p
            className={addRandomSlide("title-text")}
            style={{ color: "var(--clr-title-1)" }}
          >
            Nikolaj De Smet.
          </p>
          <p
            className={addRandomSlide("title-text")}
            style={{ color: "var(--clr-subtitle-1)" }}
          >
            I build what{" "}
            <span style={{ color: "var(--clr-accent-400)" }}>you</span> want.
          </p>
          <p
            className={addRandomSlide("description-text")}
            style={{ marginTop: "0.5em" }}
          >
            I'm a developper interested in lots of topics ranging from web
            development: front-end and back-end to low level programming in C,
            C++, machine learning in python or keeping myself up to date with
            useful technos like docker.{" "}
          </p>
          <p className={addRandomSlide("description-text")}>
            And even if I don't know the technologies you want me too use, you
            can still contact me ! Maybe it's time for me to learn it ? Who
            knows ?
          </p>
          <a href="#contact-anchor" className={addRandomSlide("cta-btn")}>
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
}

/*

    */
