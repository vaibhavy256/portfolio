import { skills } from "./data";
import "../css/skills.css";
import "../css/experience.css"

const Expertise = () => {
  const positions = ["row-1", "row-2", "row-3", "row-4"];
  return (
    <>
      <div className="skills-container">

        <h1 className="text-5xl font-bold underline text-center">Skills</h1>
        <div className="skills-grid">
          {skills.map((logo) =>
            logo.className ? (
              <div className={`square-container ${logo.parentClass}`}>
                <i className={logo.className}></i>
                <p className={logo.labelClass}>{logo.label}</p>
              </div>
            ) : (
              <div className={`square-container ${logo.parentClass}`}>
                <img
                  src={logo.image}
                  className={logo.imageClass}
                  alt={logo.label}
                />
                <p className={logo.labelClass}>{logo.label}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Expertise;
