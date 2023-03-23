import React from "react";
import Landing from "./Component/Landing";
import NavBar from "./Component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Component/style/style.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Landing />
    </>
  );
};

export default App;
