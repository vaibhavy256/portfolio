import React, { useState } from "react";
import Expertise from "../components/Expertise.jsx"
import { useRef } from "react";


const Header=(sections)=>{
    
    const[name,setName]=useState("Vaibhav Yeotikar")
    
    const menuLinks = [
        { title: "Home", link: "home", id: 1 },
        { title: "About", link: "about", id: 2 },
        { title: "Skills", link: "skills", id: 3 },
        { title: "Portfolio", link: "portfolio", id: 4 },
        { title: "Contact", link: "contact", id: 5 },
      ];
  
    //   function scrollView() {
    //     const mainRoot = document.getElementById("main-root");
    //     mainRoot.scrollIntoView({ behavior: "smooth" });
    //   }
      const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
   
    return (
        <>
        <div className=" h-20 border main flex justify-between items-center bg-gray-300">
        {/*brand logo */}
        {/* <div>
            <h1 className="text-2xl font-bold"> {name}</h1>
        </div> */}
        {/*Menu links */}
        <div className="space-x-6" id="main-root" style={{scrollBehavior: 'smooth'}} >
        {menuLinks.map(({ title, link, id }) => (
           <button
           key={id}
           onClick={() => handleScrollToSection(link)}
           className="hover:text-purple-500"
         >
           {title}
         </button>
        ))}
            
            {/* <a href="/home" className="hover:text-purple-400">
                Home
            </a>
            <a href="/about" className="hover:text-purple-400">
                About
            </a>
            <a href="/skills" className="hover:text-purple-400">
                Skiltext
            </a>
            <a href="/portfolio" className="hover:text-purple-400">
                Portfolio
            </a>
            <a href="/contact" className="hover:text-purple-400">
                Contact
            </a> */}
        </div>
        {/*buttons */}
        <div className="px-3 py-2 bg-gray-900 shadow rounded-full text-xls text-slate-100">
            Contact 
        </div>

        </div>
        
        
        </>
    )
}
export default Header;