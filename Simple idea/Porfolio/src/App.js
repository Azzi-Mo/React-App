import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Rout

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  return (
    <Router>
      <GlobalStyle />
    
      <Switch>
        <Route path="/"  />
    
      </Switch>
    </Router>
  );
};

export default App;
