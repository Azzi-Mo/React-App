import "./globalStyles.css";
import Navs from "./Component/Navs/Nav";
import Header from "./Component/Header/Header";
import SecNumber from "./Component/SecNumber/SecNumber";
import Pride from "./Component/Pride/Pride";
import Ingred from "./Component/ingredients/ingredients";
import Paralex from "./Component/paralex/paralex";
import Blogs from "./Component/Blogs/Blogs";
import Testimonials from "./Component/Testimonials/Testimonials";
import Frequent from "./Component/Frequent/Frequent";
import Parallax from "./Component/Parallax/Parallax";
import Subscribe from "./Component/Subscribe/Subscribe";
function App() {
  return (
    <>
      <Navs />
      <Header />
      <SecNumber />
      <Pride />
      <Ingred />
      <Paralex />
      <Blogs />
      <Testimonials />
      <Frequent />
      <Parallax />
      <Subscribe />
    </>
  );
}

export default App;
