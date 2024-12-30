import React from "react";
import { experienceData } from "../components/data.js";
import "../css/experience.css"
import resume from "../assets/Vaibhav_Yeotikar_Resume.pdf";

const Experience=()=>{

    return(
        <>
        <div id="experience-cards" className="experience-container">
        <h1 className="text-5xl font-bold underline text-center mt-5">Experience</h1>
        <div className="experience-cards">
            {experienceData.map((experience)=>(
                <div key={experience.id} className="experience-card">
                    <h3 className="experience-role">{experience.title}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                    <p className="experience-duration">{experience.duration}</p>
                    <ul className="experience-description">
                        {experience.description.map((item,index)=>(
                            <li key={index}>{item}</li>
                        )
                        )}
                    </ul>
                </div>
            ))}
        </div>
        <div className="button-container">
        <a href={resume} className="experience-button" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
        </div>
        </>
    )
}

export default Experience;