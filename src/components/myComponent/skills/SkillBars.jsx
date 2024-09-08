import React from "react";

export default function SkillBars({ skillTitle, power }) {
  return (
    <div className="skill-parent col">
      <div className="d-flex justify-content-between mb-1">
        {skillTitle} <span>{power}%</span>
      </div>
      <div className="skill-bar">
        <div className={`skill-inner power-${power}`}></div>
      </div>
    </div>
  );
}
