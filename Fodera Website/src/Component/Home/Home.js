import Header from "../Header/Header";
import SecNumber from "../SecNumber/SecNumber";
import Pride from "../Pride/Pride";
import Ingred from '../ingredients/ingredients'
import Paralex from "../paralex/paralex";
import Blogs from "../Blogs/Blogs";
import Testimonials from "../Testimonials/Testimonials";
import Frequent from "../Frequent/Frequent";
import Parallax from "../Parallax/Parallax";
import Subscribe from "../Subscribe/Subscribe";
// import "../Css_Style/Home.css";


function Home() {
  return (
    <>
      <Header />
      <SecNumber/>
      <Pride/>
      <Ingred/>
      <Paralex/>
       <Blogs/>
       <Testimonials/>
       <Frequent/>
       <Parallax/>
       <Subscribe/>

    </>
  );
}
export default Home;
