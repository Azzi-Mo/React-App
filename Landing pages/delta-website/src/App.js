import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
// pages
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SignUp from "./pages/SignupPage";
import Footer from './component/Footer/Footer'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pricing" exact component={PricingPage} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
