import "../../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container-60">
        <h2 className="section-title section-title-left">Contact me</h2>
        <div className="contact-container">
          <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xvongwbz" method="post" className="contact-form">
            <fieldset id="fs-frm-inputs" className="contact-fieldset animate__animated animate__bounceIn">
              <label for="full-name" className="contact-label">Full Name</label>
              <input type="text" name="name" id="full-name" placeholder="First and Last" required="" className="contact-input"/>
              <label for="email-address" className="contact-label">Email Address</label>
              <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="" className="contact-input"/>
              <label for="message" className="contact-label">Message</label>
              <textarea rows="5" name="message" id="message" placeholder="Hello, I am interested in doing business with you. Can we schedule an appointment ?" required="" className="contact-textarea contact-input"></textarea>
              <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
            </fieldset>
            <input type="submit" value="Submit" className="contact-submit animate__animated animate__bounceIn"/>
          </form>
        </div>
      </div>
    </section>
  );
}
