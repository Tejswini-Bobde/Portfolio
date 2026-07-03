import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import resume from "../../assets/resume/Resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="greeting">Hello, I'm</p>

          <h1>
            <span>Tejswini Bobde</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Java Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="typing"
          />

          <p className="hero-description">
            Passionate Computer Science student specializing in
            Full Stack Development, Java, Data Structures &
            Algorithms and Artificial Intelligence.
          </p>

          <div className="hero-buttons">
            <a
              href={resume}
              download
              className="btn primary-btn"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
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

            <a href="mailto:tejswinibobde2006@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile}
            alt="Tejswini Bobde"
            className="profile-image"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;