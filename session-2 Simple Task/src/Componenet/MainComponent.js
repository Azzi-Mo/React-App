import NavBar from "./NavBar"
import CardInfo from "./Cardinfo"
import Slider from "./Slider"
import {Routers , Route , Link}
function MainComponent()
{
    return (
        <section className="contain">
        <NavBar />
        <Route >
        <Slider />
        <CardInfo />
        </Route>
      </section>
    )
}
import { Router } from "react-router-dom"
export default MainComponent