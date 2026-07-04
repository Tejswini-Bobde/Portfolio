import "./Projects.css";
import projects from "../../data/Projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="project-image">
                <h2>{project.title}</h2>
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="tech">
                  {project.tech}
                </p>

                <p>
                  {project.description}
                </p>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;