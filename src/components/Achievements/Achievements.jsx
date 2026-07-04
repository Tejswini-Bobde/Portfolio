import "./Achievements.css";
import achievements from "../../data/Achievements";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">

        <h2 className="section-title">Achievements & Certifications</h2>

        <div className="achievement-grid">

          {achievements.map((item, index) => (
            <motion.div
              className="achievement-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .1 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;