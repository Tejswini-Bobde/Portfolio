import "./Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Let's Connect 👋</h3>

            <p>
              I'm currently looking for Software Development
              Engineer opportunities and internships.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <span>tejswinibobde2006@gmail.com</span>
            </div>

            

            <div className="contact-social">

              <a
                href="https://github.com/Tejswini-Bobde"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/tejswini-bobde1974"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;