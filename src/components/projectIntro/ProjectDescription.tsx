import { projectIntroList } from "../../constants/projectIntroConstants";
import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";

export default function ProjectDescription() {
  const { desc, mainFeatures } = projectIntroList;
  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-section"
    >
      <h4 className="section-subtitle">서비스 소개</h4>
      <div className="content-block">
        <p>{desc}</p>
        <ul className="feature-list">
          {mainFeatures.map(({ feat, id }) => (
            <li key={id}>{feat}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
