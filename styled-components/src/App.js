import React from "react";
import HomePage from "./Pages/HomePages";
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";
function App() {
  return <Router>

    <GlobalStyle />
    <Switch>
      <Route path='/' exact component={HomePage}/>
    </Switch>

  </Router>
}

export default App;
