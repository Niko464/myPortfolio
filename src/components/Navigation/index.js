import "../../styles/Navigation.scss";
import { useState, useEffect } from "react";
import { FaTimes, FaBars, FaGithub } from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { SITE, SECTIONS } from "../../data/site";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNav = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" onClick={(e) => handleNav(e, "home")}>
          <span className="nav__logo-mark">ND</span>
          <span className="nav__logo-text">{SITE.name}</span>
        </a>

        <nav className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
          <FaTimes className="nav__close" onClick={() => setOpen(false)} />
          <Scrollspy
            items={SECTIONS.map((s) => s.id)}
            currentClassName="active"
            offset={-120}
            className="nav__list"
          >
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={(e) => handleNav(e, s.id)}>
                  {s.label}
                </a>
              </li>
            ))}
          </Scrollspy>
        </nav>

        <div className="nav__actions">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="nav__icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost nav__resume"
          >
            Résumé
          </a>
          <button
            className="nav__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {isOpen && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
    </header>
  );
}
