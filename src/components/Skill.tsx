import { skillList } from "../constants/skillConstant";
import { motion } from "framer-motion";

export default function Skill() {
  const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          My Skill <em>기술 스택</em>
        </h2>
        <div className="skill__desc">
          {skillList.map((item, index) => (
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
              initial={isSmallScreen ? "" : "init"}
              whileInView={isSmallScreen ? "" : "inView"}
              viewport={{ margin: "200px 0px 0px 0px", amount: 0.8 }}
              key={index}
            >
              <span>{item.id}.</span>
              <h3>{item.title}</h3>
              <ul>
                {item.descList.map(({ desc, id }) => (
                  <li key={id}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
