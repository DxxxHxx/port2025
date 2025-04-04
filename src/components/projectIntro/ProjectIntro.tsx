import projectThumbnail from "../../assets/imgs/project-intro/this-money-thumbnail.png";
import { projectIntroList } from "../../constants/projectIntroConstants";
import { GithubIcon, House } from "lucide-react";
export default function ProjectIntro() {
  return (
    <section className="project_intro" id="project">
      <div>
        <h2 className="project_intro__title">
          Project <em>프로젝트 소개</em>
        </h2>
        <ProjectHeader />
        <ProjectDescription />
        <ProjectTech />
        {/* 완성x */}
        <ProjectContribute />
        <ProjectReview />
        <ProjectReferences />
      </div>
    </section>
  );
}

const ProjectHeader = () => {
  const { title, period, member, role, links } = projectIntroList;
  return (
    <div className="project-header">
      <div className="project-image">
        <img src={projectThumbnail} alt="Project Screenshot" />
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
    </div>
  );
};

const ProjectDescription = () => {
  const { desc, mainFeatures } = projectIntroList;
  return (
    <div className="project-section">
      <h4 className="section-subtitle">서비스 소개</h4>
      <div className="content-block">
        <p>{desc}</p>
        <ul className="feature-list">
          {mainFeatures.map(({ feat, id }) => (
            <li key={id}>{feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectTech = () => {
  const { techReason } = projectIntroList;
  return (
    <div className="project-section">
      <h4 className="section-subtitle">기술 스택 및 선정 이유</h4>
      <div className="tech-grid">
        <div className="tech-item">
          <ul>
            {techReason.map(({ id, reason, tech }) => (
              <li key={id}>
                <span className="tech-name">{tech}</span>
                <p>{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectContribute = () => {
  return (
    <div className="project-section">
      <h4 className="section-subtitle">주요 기여 사항</h4>
      <div className="contribution-list">
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
      </div>
    </div>
  );
};

const ProjectReview = () => {
  return (
    <div className="project-section">
      <h4 className="section-subtitle">리뷰 및 성장 경험</h4>
      <div className="content-block">
        <div className="review-item">
          <h5>🎯 도전 과제</h5>
          <p>대용량 실시간 데이터 처리 및 효율적인 상태 관리의 어려움</p>
        </div>
        <div className="review-item">
          <h5>💡 해결 방안</h5>
          <p>
            Redis를 도입하여 캐시 레이어 구축, Redux-Saga를 활용한 상태 관리
            개선
          </p>
        </div>
        <div className="review-item">
          <h5>📚 학습 경험</h5>
          <p>
            대규모 데이터 처리를 위한 최적화 기법과 상태 관리 패턴에 대한 이해도
            향상
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectReferences = () => {
  return (
    <div className="project-section">
      <h4 className="section-subtitle">참고 레퍼런스</h4>
      <ul className="reference-list">
        <li>
          <span className="reference-name">React 공식 문서</span>
          <p>컴포넌트 최적화 및 성능 개선 가이드</p>
        </li>
        <li>
          <span className="reference-name">Redux 공식 문서</span>
          <p>상태 관리 아키텍처 설계</p>
        </li>
        <li>
          <span className="reference-name">Web Socket MDN 문서</span>
          <p>실시간 데이터 통신 구현</p>
        </li>
      </ul>
    </div>
  );
};
