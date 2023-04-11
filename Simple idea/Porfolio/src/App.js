import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Rout
import {Contact} from './Component/Contact/Contact'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <GlobalStyle />
    
      <Switch>
        <Route path="/" exact component={Contact} />
    
      </Switch>
    </Router>
  );
};

export default App;
