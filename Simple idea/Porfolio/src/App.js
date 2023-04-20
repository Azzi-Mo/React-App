import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Rout
import { Contact } from "./Component/Contact/Contact";
import { Projects } from "./Component/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Router>
        {
          // <Route path="/Projects" component={Projects} />
          // <Route path="/Contact" component={Contact} />

        }
        
        
        <Projects/>
        <Contact />
      </Router>
      <Switch></Switch>
    </Router>
  );
}

export default App;
