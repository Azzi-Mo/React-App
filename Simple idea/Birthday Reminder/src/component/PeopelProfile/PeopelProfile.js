import React, { useState } from "react";
import Data from "../../data/db";
import './PeopelProfileStyle.css'
export default function PeopelProfile() {
  const [data, setData] = useState(Data);
  // fetch(Data)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  return (
  <>
  {data.map((peopel) => {
    return (

      <div className="peopelProfile" key={peopel.id}>

    <div>
      <img src={peopel.image} alt="" />
    </div>

    <div className="content">
      <p className="name">{peopel.name}</p>
      <p className="age">{peopel.age}</p>
    </div>

  </div>
    )
    
   })}</>
  );
}
