import React from "react";
import {
  Skill,
  WorkStory,
  Education,
  Language,
  Certification,
} from "../../component";
import "./CurriculumVitae.css";

const CurriculumVitae = () => {
  return (
    <div className="CV">
      <div className="contentCV">
        <WorkStory />
        <Skill />
        <Education />
        <Language />
        <Certification />
      </div>
    </div>
  );
};

export default CurriculumVitae;
