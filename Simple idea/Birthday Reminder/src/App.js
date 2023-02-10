import Home from "./Home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
