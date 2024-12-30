import MySql from "../assets/MySQL.png";
import springBoot from "../assets/spring boot.png";
import microservices from "../assets/Microservices.png";
import intellij from "../assets/intellij.png";
import vs from "../assets/vs.png";
import { title } from "framer-motion/client";

export const skills = [
  {
    id: 1,
    className: "fa-brands fa-java text-6xl text-orange-600",
    labelClass: "text-lg font-semibold text-orange-700 mt-2",
    label: "Java",
    parentClass: "flex-column-center",
  },
  {
    id: 2,
    image: MySql,
    labelClass: "text-lg font-semvcfbibold text-gray-700 mt-2",
    label: "MySQL",
    parentClass: "flex-column-center",
    imageClass: "w-16 h-16",
  },
  {
    id: 3,
    image: springBoot,
    labelClass: "text-lg font-semibold text-green-700 mt-2",
    label: "Spring Boot",
    parentClass: "flex-column-center",
    imageClass: "w-16 h-16",
  },
  {
    id: 4,
    image: microservices,
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "Microservices",
    parentClass: "flex-column-center",
    imageClass: "w-16 h-16",
  },
  {
    id: 5,
    className: "fa-brands fa-git-alt text-6xl text-red-600",
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "Git",
    parentClass: "flex-column-center",
  },
  {
    id: 6,
    className: "fa-brands fa-jenkins text-6xl text-gray-500",
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "Jenkins",
    parentClass: "flex-column-center",
  },
  {
    id: 7,
    className: "fa-brands fa-docker text-6xl text-blue-500",
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "Docker",
    parentClass: "flex-column-center",
  },
  {
    id: 8,
    className: "fa-brands fa-react text-6xl text-blue-600",
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "React Js",
    parentClass: "flex-column-center",
  },
  {
    id: 9,
    image: intellij,
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "Intellij",
    parentClass: "flex-column-center",
    imageClass: "w-16 h-16",
  },
  {
    id: 10,
    image: vs,
    labelClass: "text-lg font-semibold text-gray-700 mt-2",
    label: "VS Code",
    parentClass: "flex-column-center",
    imageClass: "w-16 h-16",
  },
];

export const experienceData=[
  {
    id: 1,
    title: "Software Engineer",
    company: "Cybage Software",
    duration: "June 2022- August2024",
    description:[
      "Java and Spring Boot Development: Developed applications using Java and Spring Boot, with a focus on scalability and performance optimization.",
      "SQL Optimization: Designed and refined complex SQL queries to enhance data retrieval performance and ensure data accuracy across multiple microservices.",
      "Microservices Architecture: Built scalable systems using microservices and REST APIs to enable seamless communication between distributed services.",
      "REST API Development: Engineered APIs to consolidate and integrate datasets, facilitating efficient data management and ensuring data consistency.",
      "Performance Optimization: Created efficient RESTful APIs and microservices to improve data retrieval and enhance user experience.",
      "Application Security: Implemented Spring Security with JWT authentication to strengthen application security and prevent unauthorized access."
    ]
  }
]
// export const introData = {
//   message: "Hi, I am",
//   name: "Vaibhav Yeotikar",
//   details: ` I specialize in delivering high-quality software solutions, with a passion for clean code and scalable architectures
//                         I am dedicated to continuous learning and exploring innovative technologies to enhance development processes.`,
//   title: "I am a Software Engineer",
// };
