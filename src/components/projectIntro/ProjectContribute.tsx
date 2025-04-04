import { motion } from "framer-motion";
import { projectIntroVariants } from "../../constants/animationVariants";

export default function ProjectContribute() {
  return (
    <motion.div
      variants={projectIntroVariants}
      initial="init"
      whileInView="inView"
      className="project-section"
    >
      <h4 className="section-subtitle">주요 기여 사항</h4>
      <motion.div variants={projectIntroVariants} className="contribution-list">
        <div className="contribution-item">
          <h5>실시간 데이터 동기화 구현</h5>
          <p>WebSocket을 활용하여 실시간 건강 데이터 업데이트 시스템 구축</p>
          <div className="achievement">
            <span className="achievement-number">50%</span>
            <span className="achievement-label">성능 개선</span>
          </div>
        </div>
        <div className="contribution-item">
          <h5>사용자 경험 최적화</h5>
          <p>데이터 캐싱 및 lazy loading 도입으로 페이지 로딩 속도 개선</p>
          <div className="achievement">
            <span className="achievement-number">2초</span>
            <span className="achievement-label">로딩 시간 단축</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
