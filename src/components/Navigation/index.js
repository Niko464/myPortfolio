import "../../styles/Navigation.scss";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Scrollspy from "react-scrollspy";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const body = document.body;
  let lastScrollPos = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currScrollPos = window.pageYOffset;

      if (currScrollPos <= 0) {
        body.classList.remove("scroll-up");
      } else if (
        currScrollPos > lastScrollPos &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currScrollPos < lastScrollPos &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScrollPos = currScrollPos;
    });
  }, []);

  useEffect(() => {
    const navElem = document.querySelector("nav");

    if (navElem) {
      if (isOpen) {
        navElem.classList.add("open");
      } else if (navElem.classList.contains("open")) {
        navElem.classList.remove("open");
      }
    }
  }, [isOpen]);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <header className="nav-container">
      <div className="inner flex">
        <a href="#" className="logo">
          Nikolaj De Smet
        </a>
        <nav>
          <FaTimes onClick={toggle} className="nav-close-btn" />
          <ul>
            <Scrollspy
              items={["home", "about", "education", "skills", "projects", "contact"]}
              currentClassName="active"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-anchor">About Me</a>
              </li>
              <li>
                <a href="#education-anchor">Education</a>
              </li>
              <li>
                <a href="#skills-anchor">Skills</a>
              </li>
              <li>
                <a href="#projects-anchor">Projects</a>
              </li>
              <li>
                <a href="#contact-anchor">Contact</a>
              </li>
            </Scrollspy>
          </ul>
        </nav>
        <div className="burger-icon">
          <FaBars
            onClick={toggle}
            style={{ color: "white", fontSize: "1.5em" }}
          />
        </div>
      </div>
    </header>
  );
}
