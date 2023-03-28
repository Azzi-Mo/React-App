import React from "react";
import NavBar from "./Component/NavBar";
import Landing from "./Component/Landing";
import Features from "./Component/Features"
import Services from "./Component/Services"
import Portfolio from "./Component/Portfolio"
import About from "./Component/About"
import Contact from "./Component/Contact"


import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Component/style/style.css";


const App = () => {
  return (
    < >
    <NavBar />
    <Landing />
    <Features />
    <Services/>
    <Portfolio />
    <About />
    <Contact />
    </>
    );
  };

export default App;
