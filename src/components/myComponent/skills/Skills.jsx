import React from "react";
import SkillBars from "./SkillBars";
export default function Skills() {
  return (
    <div>
      <div className="row mb-5">
        <SkillBars power={100} skillTitle={"JavaScript"} />
        <SkillBars power={75} skillTitle={"TypeScript"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={75} skillTitle={"React"} />
        <SkillBars power={75} skillTitle={"React Hooks"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={50} skillTitle={"Next.js"} />
        <SkillBars power={100} skillTitle={"Redux"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={75} skillTitle={"Tailwind CSS"} />
        <SkillBars power={50} skillTitle={"Chakra UI"} />
      </div>
      <h4 className="mb-5 text-color text-center">More detailed</h4>
      <div className="row mb-5">
        <SkillBars power={100} skillTitle={"React router dom"} />
        <SkillBars power={75} skillTitle={"jquery"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={50} skillTitle={"React hook form"} />
        <SkillBars power={75} skillTitle={"zod"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={100} skillTitle={"Rest API"} />
        <SkillBars power={100} skillTitle={"axios"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={50} skillTitle={"Node.js"} />
        <SkillBars power={50} skillTitle={"express.js"} />
      </div>
      <div className="row mb-5">
        <SkillBars power={75} skillTitle={"Git"} />
        <SkillBars power={100} skillTitle={"bootstrap"} />
      </div>
    </div>
  );
}
