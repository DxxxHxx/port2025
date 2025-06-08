import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";
import { ProjectInfo } from "../../types/interface";

export default function ProjectReview(props: ProjectInfo) {
  const { reviews } = props;
  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-section"
    >
      <h4 className="section-subtitle">리뷰 및 성장 경험</h4>
      <motion.div variants={projectIntroVariants} className="contribution-list">
        {reviews.map(({ id, review }) => (
          <div className="contribution-item" key={id}>
            {review.map((item) => (
              <ProjectReviewItem {...item} key={item.id} />
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

const ProjectReviewItem = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => (
  <div className="review-item">
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
);
