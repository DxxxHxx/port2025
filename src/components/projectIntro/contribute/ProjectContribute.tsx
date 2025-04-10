import { motion } from "framer-motion";
import { projectIntroList } from "../../../constants/projectIntroConstants";
import { projectIntroVariants } from "../../../constants/animationVariants";

export default function ProjectContribute() {
  const { contribute } = projectIntroList;
  return (
    <>
      <motion.div
        variants={projectIntroVariants}
        initial="init"
        whileInView="inView"
        className="project-section"
      >
        <h4 className="section-subtitle">주요 기여 사항</h4>
        <motion.div
          variants={projectIntroVariants}
          className="contribution-list"
        >
          {contribute.map((item) => (
            <ProjectContributeItem {...item} key={item.id} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

const ProjectContributeItem = ({
  title,
  desc,
  result,
}: {
  title: string;
  desc: string;
  result: { number: string; text: string };
}) => (
  <div className="contribution-item">
    <h5>{title}</h5>
    <p>{desc}</p>
    <div className="achievement">
      <span className="achievement-number">{result.number}</span>
      <span className="achievement-label">{result.text}</span>
    </div>
  </div>
);
