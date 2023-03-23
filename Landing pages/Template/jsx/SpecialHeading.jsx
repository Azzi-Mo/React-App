import React from "react";

const SpecialHeading = (props) => {
  return (
    <>
      <h2 className="special-heading">{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
};

export default SpecialHeading;
