import React from "react";
import { BrowserRouter as Router, Switch, Route   } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/SignupPage/Signup";
import GlobalStyle from "./globalStyle";
function App() {
  return (
    <>

      <Router>
      <GlobalStyle/>
        <Switch>
          {/* <GlobalStyle /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </Router>


    </>
  );
}

export default App;
