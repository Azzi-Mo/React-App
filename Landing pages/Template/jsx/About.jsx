import React from "react";
import SpecialHeading from "./SpecialHeading";
const About = () => {
  const name_p1 = "About";
  const name_p2 = "Less is more work";

  return (
    <>
      <SpecialHeading name_p1={name_p1} name_p2={name_p2} />
      <div className="about" id="about">
        <div className="container ">
          <div className="about-content ">
            <div className="image">
              <img decoding="async" src="./imgaes/about.jpg" alt="" />
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nemo neque voluptate tempora velit cum non, fuga vitae
                architecto delectus sed maxime rerum impedit aliquam obcaecati,
                aut excepturi iusto laudantium!
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
                officiis dolorum hic voluptate quaerat minima, similique
                inventore esse, alias, sed quo officia?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
