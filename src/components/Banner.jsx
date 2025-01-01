import { useEffect } from "react";
import bannerImage from "../assets/bg_image6.jpg";
import bgImage from "../assets/myphoto.jpg";
import Typed from "typed.js";
import { useRef } from "react";
import "../css/banner.css";
import resume from "../assets/Vaibhav_Yeotikar_Resume.pdf";

const Banner = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer"],
      typeSpeed: 50,
      backSpeed: 40,
      startDelay: 100,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const downloadResume = () => {
    const pdfUrl = "..assets/Vaibhav_Yeotikar_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vaibhav_Yeotikar_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="banner">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-w-md mt-3 ms-0 text-gray-900">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="name">Vaibhav Yeotikar</h1>
          <div><h2 className="heading">
            I am a <span ref={el}></span>{" "}
          </h2></div>
          <p className="mt-4 text-lg leading-7 text-gray-700">
            A committed software engineer with over 2 years of experience in
            software development. Proficient indeveloping Java-based
            applications with a REST approach using Java, Spring Boot, MySQL,
            and Microservices.Strong analytical and debugging skills, with a
            keen ability to tackle complex challenges.
          </p>
          <div className="icons-container flex space-x-5 mt-6">
            <a
              href="https://www.linkedin.com/in/vaibhav-yeotikar-53744b199/"
              className="cursor-pointer px-3 py-4 w-14 h-14 rounded-full bg-blue-600 flex justify-center items-center text-white hover:bg-blue-700 transition-all duration-300"
            >
              <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/vaibhavy256"
              className="cursor-pointer px-3 py-4 w-14 h-14 rounded-full bg-gray-800 flex justify-center items-center text-white hover:bg-gray-900 transition-all duration-300"
            >
              <i className="fa-brands text-4xl fa-github"></i>
            </a>
          </div>
          <div className="button:hover">
          <a className="banner-button "
            href={resume}
          >
            Resume
          </a>
          </div>
          
        </div>
      </div>
      {/* )} */}
      <div className="flex justify-center mt-5">
        <img
          className="rounded-full shadow-lg w-64 md:w-80"
          src={bgImage}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
