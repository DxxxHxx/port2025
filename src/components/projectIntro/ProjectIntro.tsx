import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectContribute from "./contribute/ProjectContribute";
import ProjectReferences from "./ProjectReferences";
import ProjectReview from "./ProjectReview";
import { useState } from "react";
import { Building2, UserRound } from "lucide-react";
import { soloPrpjectList } from "../../constants/soloProjectList";
import { teamProjectList } from "../../constants/teamProjectList";

export default function ProjectIntro() {
  const [activeTab, setActiveTab] = useState<"solo" | "team">("solo");

  const data = activeTab === "solo" ? soloPrpjectList : teamProjectList;
  return (
    <section className="project_intro" id="project">
      <div>
        <h2 className="project_intro__title">
          Project <em>프로젝트 소개</em>
        </h2>
        <div className="tab-container">
          <button
            className={` ${activeTab === "solo" ? "active" : ""}`}
            onClick={() => setActiveTab("solo")}
          >
            <UserRound className="tab-icon" />
            개인 프로젝트
          </button>
          <button
            className={` ${activeTab === "team" ? "active" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            <Building2 className="tab-icon" />팀 프로젝트
          </button>
        </div>

        <ProjectHeader {...data} />
        <ProjectDescription {...data} />
        <ProjectTech {...data} />
        {activeTab === "team" && <ProjectContribute {...data} />}
        <ProjectReview {...data} />
        <ProjectReferences {...data} />
      </div>
    </section>
  );
}
