import React from "react";
import SpecialHeading from "./SpecialHeading";
const Portfolio = () => {
  const name_p1 = "Portfolio";
  const name_p2 = "If you do it right, it will last forever.";
  return (
    <>
      <SpecialHeading name_p1={name_p1} name_p2={name_p2} />

      <div className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-content ">
            <div className="card ">
              <img decoding="async" src="./imgaes/portfolio-1.jpg" alt="" />
              <div className="info">
                <h3>Project Here</h3>
                <p>
                  My creative ability is very difficult to measure because it
                  can manifest in so many surprising and.
                </p>
              </div>
            </div>

            <div className="card  ">
              <img decoding="async" src="./imgaes/portfolio-2.jpg" alt="" />
              <div className="info">
                <h3>Project Here</h3>
                <p>
                  My creative ability is very difficult to measure because it
                  can manifest in so many surprising and.
                </p>
              </div>
            </div>

            <div className="card  ">
              <img decoding="async" src="./imgaes/portfolio-3.jpg" alt="" />
              <div className="info">
                <h3>Project Here</h3>
                <p>
                  My creative ability is very difficult to measure because it
                  can manifest in so many surprising and.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
