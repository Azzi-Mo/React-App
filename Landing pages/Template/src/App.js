import React from "react";
import NavBar from "./Component/bundle.js";
import Head from "./Component/bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Component/style/style.css";

const App = () => {
  return (
    <section className="container">
      <div class="row">
       
          <NavBar />
          <Head />

      </div>
    </section>
  );
};

export default App;
