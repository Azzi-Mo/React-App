import Header from "./Header";
import SecNumber from "./SecNumber";
import Pride from "./Pride";
import Ingred from './ingredients'
import "../Css_Style/Home.css";
import Paralex from "./paralex";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
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
    </>
  );
}
export default Home;
