import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Rout

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Test from "./Component/Test";
import PricingPage from "./pages/PricingPage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Test />
      <Switch>
        <Route path="/pricing" exact component={PricingPage} />
        {
          // <Route path="/pricing" exact component={PricingPage} />
          // <Route path="/signup" exact component={SignUp} />
        }
      </Switch>
    </Router>
  );
};

export default App;
