import NavBar from "./NavBar";
import CardInfo from "./Cardinfo";
import Slider from "./Slider";
import { Router, Route } from "react-router-dom";
function MainComponent() {
  return (
    <section className="contain">
      <NavBar />
      <Slider />
      <Route
        path="CardInfo"
        element={
          <>
            <CardInfo />
          </>
        }
      ></Route>
    </section>
  );
}
export default MainComponent;
