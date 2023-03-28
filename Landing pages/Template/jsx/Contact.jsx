import React from "react";
import SpecialHeading from "./SpecialHeading";
const Contact = () => {
  const name_p1 = "Contact";
  const name_p2 = "We are born to create";

  return (
    <>
      <div className="contact" id="contact">
        <SpecialHeading name_p1={name_p1} name_p2={name_p2} />
        <div className="container">
          <div className="info row">
            <p className="label">Feel free to drop us a line at:</p>
            <a
              href="mailto:leonagency@mail.com?subject=Contact"
              className="link"
            >
              leonagency@mail.com
            </a>

            <div className="social">
              Find Us On Social Networks
              <i className="fab fa-youtube"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        &copy; 2023 <span>Leon</span> All Right Reserved
      </div>
    </>
  );
};
export default Contact;

