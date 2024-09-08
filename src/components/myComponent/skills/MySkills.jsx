import React from "react";
import "../../../css/skills.css";
import Skills from "./Skills";
export default function MySkills() {
  return (
    <div className="bg-primary-color pt-2 pb-2">
      <div className="container light-color">
        <h1 className="text-color text-center">Skills</h1>
        <Skills />
      </div>
    </div>
  );
}
