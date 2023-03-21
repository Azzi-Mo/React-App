import React from "react";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="Logo">
        <img
          decoding="async"
          className="logo"
          src="./imgaes/logo.png"
          alt="navbar logo"
        />
      </div>
      <div className="icon">
        <i class="fa-solid fa-bars"></i>
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
  );
};

export default NavBar;
