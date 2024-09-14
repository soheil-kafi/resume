import { NavLink } from "react-router-dom";
import "../../css/Buttons.css";
export const Buttons = () => {
  return (
    <div className="d-flex -content-around ">
      <div>
        {/*resume*/}
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          <button className="my-button btn text-color bg-secondary-color m-1">
            Home
          </button>
        </NavLink>
      </div>

      <div>
        {/*resume*/}
        <NavLink
          to="/resume/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button className="my-button btn text-color bg-secondary-color m-1">
            my skills
          </button>
        </NavLink>
      </div>
    </div>
  );
};
