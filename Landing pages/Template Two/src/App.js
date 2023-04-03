import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Component/Styles.css";


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        {
        //   Route path="/" exact component={HomePage} />
        // <Route path="/pricing" exact component={PricingPage} />
        // <Route path="/signup" exact component={SignUp} />
      }
      </Switch>
      <Footer />
    </Router>
  );
  };

export default App;
