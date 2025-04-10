import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";
import { projectIntroList } from "../../constants/projectIntroConstants";

export default function ProjectReferences() {
  const { references } = projectIntroList;
  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-section"
    >
      <h4 className="section-subtitle">주요 참고 레퍼런스</h4>
      <ul className="reference-list">
        {references.map((item) => (
          <motion.li variants={projectIntroVariants} key={item.id}>
            <a href={item.link} target="_blank" className="reference-name">
              {item.title}
            </a>
            <p>{item.desc}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
