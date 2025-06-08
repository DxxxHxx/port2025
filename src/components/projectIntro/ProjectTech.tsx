import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";
import { ProjectInfo } from "../../types/interface";

export default function ProjectTech(props: ProjectInfo) {
  const { techReason } = props;
  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-section"
    >
      <h4 className="section-subtitle">기술 스택 및 선정 이유</h4>
      <div className="tech-grid">
        <div className="tech-item">
          <ul>
            {techReason.map(({ id, reason, tech }) => (
              <motion.li variants={projectIntroVariants} key={id}>
                <span className="tech-name">{tech}</span>
                <p>{reason}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
