import { useState } from "react";
import { ActiveTabType } from "../../types/interface";
import { AlertCircleIcon, BarChartIcon } from "lucide-react";
import ChallengeList from "./ChallengeList";
import {
  improvementList,
  troubleshootingList,
} from "../../constants/challengeConstants";

export default function Challenge() {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("troubleshooting");

  return (
    <div className="challenge-container" id="challenge">
      <h2 className="challenge-title">
        Challenge <em>도전</em>
      </h2>
      <div className="tab-container">
        <button
          className={` ${activeTab === "troubleshooting" ? "active" : ""}`}
          onClick={() => setActiveTab("troubleshooting")}
        >
          <AlertCircleIcon className="tab-icon" />
          트러블슈팅
        </button>
        <button
          className={` ${activeTab === "improvement" ? "active" : ""}`}
          onClick={() => setActiveTab("improvement")}
        >
          <BarChartIcon className="tab-icon" />
          개선사항
        </button>
      </div>

      <ChallengeList
        data={
          activeTab === "troubleshooting"
            ? troubleshootingList
            : improvementList
        }
      />
    </div>
  );
}
