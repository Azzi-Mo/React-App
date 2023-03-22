import React from "react";
import NavBar from "./Component/Head";
import Head from "./Component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Component/style/style.css";

const App = () => {
  return (
    <section className="container">
      <NavBar />
      <Head />
    </section>
  );
};

export default App;
