import { motion } from "framer-motion";
import { GithubIcon, House } from "lucide-react";
import { projectIntroVariants } from "../../constants/animationVariants";
import { ProjectInfo } from "../../types/interface";

export default function ProjectHeader(props: ProjectInfo) {
  const { title, period, member, role, links, thumbnail } = props;

  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-header"
    >
      <div className="project-image">
        <img src={thumbnail} alt="Project Screenshot" />
      </div>
      <div className="project-overview">
        <h3 className="project-title">{title}</h3>
        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">프로젝트 기간</span>
            <span className="meta-value">{period}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">팀 구성</span>
            <span className="meta-value">{member}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">담당 역할</span>
            <span className="meta-value">{role}</span>
          </div>
        </div>
        <div className="project-links">
          <a
            target="_blank"
            href={links.serviceLink}
            className="project-link primary"
          >
            <span className="link-arrow">
              <House />
            </span>
            <span className="link-text">서비스 바로가기</span>
          </a>
          <a target="_blank" href={links.githubLink} className="project-link">
            <span className="link-arrow">
              <GithubIcon />
            </span>
            <span className="link-text">GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
