import React from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/Style/Styles.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
};

export default App;
