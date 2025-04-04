import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectContribute from "./ProjectContribute";
import ProjectReferences from "./ProjectReferences";
import ProjectReview from "./ProjectReview";

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
