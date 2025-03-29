import { skillText } from "../constants/skillConstant";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          My Skill <em>기술 스택</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((item, index) => (
            <motion.div
              variants={{
                init: {
                  x: 100,
                  opacity: 0,
                },
                inView: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                },
              }}
              initial="init"
              whileInView="inView"
              viewport={{ margin: "200px 0px 0px 0px", amount: 0.8 }}
              key={index}
            >
              <span>{index + 1}.</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
