import "../../styles/Footer.css";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { SITE, SECTIONS } from "../../data/site";

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo" onClick={(e) => scrollTo(e, "home")}>
            <span className="footer__logo-mark">ND</span>
            {SITE.name}
          </a>
          <p className="footer__tagline">I build what you want.</p>
        </div>

        <nav className="footer__nav">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={(e) => scrollTo(e, s.id)}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {SITE.name}</span>
        <span className="footer__built">Built with React &amp; Framer Motion</span>
        <a href="#home" className="footer__top" onClick={(e) => scrollTo(e, "home")}>
          Back to top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
