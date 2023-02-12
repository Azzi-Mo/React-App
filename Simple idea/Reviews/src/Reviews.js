import React from "react";
import peopel from "./data";
import { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = peopel[index];

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return newIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn">Surprise Me</button>
    </article>
  );
}
