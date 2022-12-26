import NavBar from "./NavBar";
import CardInfo from "./Cardinfo";
import Slider from "./Slider";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./CardDetails";
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
        <Route path="CardInfo/:CardDetails" element={<>
          <CardDetails/>
          </>}></Route>
      </Routes>
    </section>
  );
}
export default MainComponent;
