import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { useRef } from "react";
import Experience from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const [count, setCount] = useState(0);

  return (
<>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Expertise />
      </div>
      <div id="portfolio">
        <Experience/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer />
    </>
  );
}

export default App;
