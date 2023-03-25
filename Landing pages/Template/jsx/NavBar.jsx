import React, { useState } from "react";
import items from "./Data";

// eslint-disable-next-line no-undef
const allCategories = [...new Set(items.map((item) => item.category))];
// eslint-disable-next-line react-hooks/rules-of-hooks
const [categories] = useState(allCategories);

const NavBar = () => {
  if (!categories.length) {
    return null;
  }

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

        {
          // <ul>
          //   <li>
          //     <a href="#services">Services</a>
          //   </li>
          //   <li>
          //     <a href="#portfolio">Portfolio</a>
          //   </li>
          //   <li>
          //     <a href="#contact">Contact</a>
          //   </li>
          //   <li>
          //     <a href="#about">About</a>
          //   </li>
          // </ul>
        }

        <ul>
          {categories.map((categorie, indx) => {
            return (
              <li key={indx}>
                <a>{categorie}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
