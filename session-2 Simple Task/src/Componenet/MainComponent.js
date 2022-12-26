import NavBar from "./NavBar";
import CardInfo from "./Cardinfo";
import Slider from "./Slider";
import { Routes, Route } from "react-router-dom";
function MainComponent() {
  return (
    <section className="contain">
      <NavBar />
      <Slider />
      <Routes>
        <Route
          path="/Cardinfo"
          element={
            <>
              <CardInfo />
            </>
          }
        ></Route>
      </Routes>
    </section>
  );
}
export default MainComponent;
