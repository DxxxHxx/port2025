import { ChallengeCard } from "../../types/interface";
import { ArrowRightIcon, Check } from "lucide-react";
import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";

export default function ChallengeList({ data }: { data: ChallengeCard[] }) {
  return (
    <section className="troubleshooting-section" id="troubleshooting">
      <motion.ul
        variants={projectIntroVariants}
        initial="init"
        whileInView={"inView"}
        className="troubleshooting-list"
      >
        {data.map((item) => (
          <motion.li key={item.id} variants={projectIntroVariants}>
            <ChallengeItem key={item.id} {...item} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

const ChallengeItem = ({ date, description, link, title }: ChallengeCard) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="troubleshooting-item"
    >
      <div className="item-content">
        <div className="item-left">
          <div className="item-icon">
            <Check />
          </div>
          <div className="item-info">
            <h3>{title}</h3>
            <p className="item-description">{description}</p>
            <p className="item-date">{date}</p>
          </div>
        </div>
        <ArrowRightIcon className="item-arrow" />
      </div>
    </a>
  );
};
