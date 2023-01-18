import React from "react";
import HomePage from "./Pages/HomePages";
import GlobalStyle from './globalStyles';
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Footer from "./Component/Footer/Footer";
function App() {
  return <Router>

    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route path='/' exact component={HomePage}/>
    </Switch>
    <Footer/> 

  </Router>
}

export default App;
