import React from "react";
import { BrowserRouter as Router , Switch , Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Signup from "./pages/SignuoPage/Signup";
function App() {
  return (
   <>
<Router>
  <Switch>
    <Route path='/' exact component={HomePage}/>

    <Route path='/singnup' exact component={Signup}/>

  </Switch>
</Router>
   </>
  );
}

export default App;
