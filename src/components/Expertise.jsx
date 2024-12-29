import { skills } from "./data";
import "../css/skills.css";

const Expertise = () => {
  const positions = ["row-1", "row-2", "row-3", "row-4"];
  return (
    <>
      <div className="mt-10 flex flex-col items-center space-y-8 bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 rounded-lg shadow-lg">
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
