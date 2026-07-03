import "./Education.css";
import education from "../../data/education";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">

        <h2 className="section-title">Education</h2>

        <div className="timeline">

          {education.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
            >
              <span className="year">{item.year}</span>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.institute}</h4>
                <p>{item.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;