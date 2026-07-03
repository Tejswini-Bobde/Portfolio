import "./Skills.css";
import skills from "../../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <h3>{skill.category}</h3>

              <div className="skill-items">

                {skill.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;