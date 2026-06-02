import "../../styles/Contact.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { SITE } from "../../data/site";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build"
              accent="something."
              lead="Available for freelance, fully remote. Have a project in mind, or a technology you'd like me to take on? Send a message — I read every one."
            />
            <Reveal className="contact__availability" delay={0.08}>
              <span className="contact__dot" />
              Available for freelance · Fully remote
            </Reveal>
            <Reveal className="contact__email" delay={0.1}>
              <a href={`mailto:${SITE.email}`}>
                <FaEnvelope /> {SITE.email}
              </a>
            </Reveal>
            <Reveal className="contact__socials" delay={0.12}>
              <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </Reveal>
          </div>

          <Reveal className="contact__card glass" delay={0.05}>
            <form
              id="fs-frm"
              name="simple-contact-form"
              acceptCharset="utf-8"
              action={SITE.formspree}
              method="post"
              className="contact__form"
            >
              <div className="contact__field">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="First and Last"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email-address">Email Address</label>
                <input
                  type="email"
                  name="_replyto"
                  id="email-address"
                  placeholder="email@domain.tld"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Hello, I am interested in doing business with you. Can we schedule an appointment?"
                  required
                />
              </div>

              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
              <button type="submit" className="btn btn-primary contact__submit">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
