import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import About from "../components/About";
import Projects from "../components/Projects";
import { homeObjOne } from "../components/About/Data";
import { ProjObjOne } from "../components/Projects/Data";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Slider slides={props.images} autoPlay={5} />
      <About {...homeObjOne} />
      <Projects {...ProjObjOne} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
