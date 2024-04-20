import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/styles.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { linkData } from "./siteData";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
