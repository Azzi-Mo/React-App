/* eslint-disable no-unused-expressions */
import React from "react";
import peopel from "./data";
import { useState } from "react";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = peopel[index];

  const checkNumber = (number) => {
    if (number > peopel.length - 1) return 0;
    if (number < 0) return peopel.length - 1;
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * peopel.length);
    if (randomNumber === index) randomNumber = index + 1;
    setIndex(checkNumber(randomNumber));
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
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={prevPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
}
