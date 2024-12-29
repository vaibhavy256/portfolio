import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { useRef } from "react";

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
        <h1>Portfolio Section</h1>
      </div>
      <div id="contact">
        <h1>Contact Section</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
