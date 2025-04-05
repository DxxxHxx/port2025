import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { projectIntroList } from "../../../constants/projectIntroConstants";
import { projectIntroVariants } from "../../../constants/animationVariants";
import ProjectContributeDetaill from "./ProjectContributeDetaill";

export default function ProjectContribute() {
  const [showDetail, setShowDetail] = useState<boolean | null>(false);
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
        <button
          onClick={() => setShowDetail(true)}
          className="all-contribution"
        >
          추가 기여 사항 <ChevronRight />
        </button>
      </motion.div>
      <AnimatePresence>
        {showDetail && (
          <ProjectContributeDetaill closeDetail={() => setShowDetail(null)} />
        )}
      </AnimatePresence>
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
