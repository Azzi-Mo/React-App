import React from "react";
import SpecialHeading from "./SpecialHeading";
const services = () => {
  const name = "Services";
  const age = "Don't be busy, be productive";
  return (
    <>
      <SpecialHeading name={name} age={age} />

      <div className="services" id="services">
        <div className="container">
          <div className="services-content row">
            <div className="row col-sm-12  col-md-6 col-lg-4 ">
              <div className="srv ">
                <i className="fas fa-palette fa-2x"></i>
                <div className="text">
                  <h3>Graphic Design</h3>
                  <p>
                    Graphic design is the process of visual communication and
                    problem-solving using one or more of typography, photography
                    and illustration.
                  </p>
                </div>
              </div>
              <div className="srv ">
                <i className="fab fa-sketch fa-2x"></i>
                <div className="text">
                  <h3>UI & UX</h3>
                  <p>
                    Process of enhancing user satisfaction with a product by
                    improving the usability, accessibility, and pleasure
                    provided in the interaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="row col-sm-12 col-md-6 col-lg-4">
              <div className="srv ">
                <i className="fas fa-vector-square fa-2x"></i>
                <div className="text">
                  <h3>Web Design</h3>
                  <p>
                    Web design encompasses many different skills and disciplines
                    in the production and maintenance of websites.
                  </p>
                </div>
              </div>
              <div className="srv ">
                <i className="fas fa-pencil-ruler fa-2x"></i>
                <div className="text">
                  <h3>Web Development</h3>
                  <p>
                    Web development is a broad term for the work involved in
                    developing a web site for the Internet or an intranet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-6 col-lg-4">
              <div className="image image-column">
                <img decoding="async" src="./imgaes/services.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
