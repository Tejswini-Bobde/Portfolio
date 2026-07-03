import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">About Me</h2>

          <p className="about-text">
            I'm a Computer Science Engineering student at Yeshwantrao
            Chavan College of Engineering, Nagpur, with a strong
            passion for Full Stack Development, Java, and Artificial
            Intelligence.
          </p>

          <p className="about-text">
            I enjoy building scalable web applications using the MERN
            stack and solving Data Structures & Algorithms problems to
            strengthen my problem-solving skills.
          </p>

          <p className="about-text">
            I was a National Finalist in Smart India Hackathon 2025,
            have solved 270+ DSA problems, and continuously work on
            improving my development and software engineering skills.
          </p>

          <div className="about-cards">

            <div className="card">
              <h3>270+</h3>
              <p>DSA Problems</p>
            </div>

            <div className="card">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>

            <div className="card">
              <h3>8.98</h3>
              <p>CGPA</p>
            </div>

            <div className="card">
              <h3>SIH 2025</h3>
              <p>National Finalist</p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;