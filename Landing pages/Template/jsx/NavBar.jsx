import React from "react";
const NavBar = () => {
  return (
    <section className="navbar container">
      <div className="Logo">
        <img
          decoding="async"
          className="logo"
          src="./imgaes/logo.png"
          alt="navbar logo"
        />
      </div>
      <div className="icon">
        <i className="fa-solid fa-bars"></i>
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
      </div>
    </section>


  );
};

export default NavBar;
