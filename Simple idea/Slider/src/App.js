import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeopel] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndx) => {
          const { id, image, name, title, quote } = person;
          let position = " nextSlide";
          if (personIndx === index) {
            position = "activeSlide";
          }
          if (personIndx === index - 1 || (index === 0 && personIndx === people.length - 1) ) {
            position = " lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} className="person-img" alt={name}></img>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
