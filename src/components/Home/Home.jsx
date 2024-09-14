import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="pb-4">
      <div className="d-flex justify-content-between pt-5 pb-5 bottom-border">
        <div className="photo-container">
          <div className="photo-inner">
            <img src="/Me.jpg" alt="Me" className="me-photo" />
            <div className="inner-photo"></div>
          </div>
        </div>
        <div className="max-width-40">
          <p className="mb-1 fz-mid bottom-border pb-3">
            im <span className="text-color">soheil-kafi</span> a student and
            developer , i born 2008 in alborz , i like codding , playing
            video-games and sports
          </p>
          <p className="mb-1 fz-mid mt-3">
            i start coding in 14 with HTML and CSS by help of my brother{" "}
            <a
              href="https://github.com/SinaKafi/"
              target="_blank"
              className="text-color"
            >
              SINA
            </a>{" "}
            and then , i continue with JS , jquery , React and ... until now i
            have{" "}
            <NavLink to={"/resume/skills"} className="text-color">
              these skills
            </NavLink>{" "}
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-color text-center mt-5 mb-3">WORK EXPERIENCE</h4>
        <p className="text-center fz-mid">
          at this time i have no any work experience and i like to continue my
          journey as intern
        </p>
      </div>
      <div className="fz-mid">
        <h4 className="text-color text-center mt-5 mb-3 ">soft skills</h4>
        <p>• Team working</p>
        <p>• Problem solving</p>
      </div>
      <a href="./resume.pdf" download className="pt-2  text-color fz-mid">
        <h5 style={{ marginBottom: "0px" }} className="text-center">
          Download my resume as PDF
        </h5>
      </a>
    </div>
  );
}
