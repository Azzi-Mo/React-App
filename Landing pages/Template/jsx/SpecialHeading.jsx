import React from "react";

const SpecialHeading = (props) => {
  return (
    <>
      <h2 className="special-heading">{props.name_p1}</h2>
      <p>{props.name_p2}</p>
    </>
  );
};

export default SpecialHeading;
