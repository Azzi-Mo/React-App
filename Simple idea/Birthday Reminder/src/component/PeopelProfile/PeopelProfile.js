import React from "react";
import "./PeopelProfileStyle.css";
import Fetching from "./Fetching";

export default function PeopelProfile() {
  const { peoples, deletedID , GetAllData } = Fetching('http://localhost:5000/peopels');

  return (
    <>
      {peoples.map((person) => {
        return (
          <div className="peopelProfile" key={person.id}>
            <div>
              <img src={person.image} alt="" />
              <div className="content">
                <p className="name">{person.name}</p>
                <p className="age">{person.age}</p>
              </div>
            </div>

            <button
              className="btn"
              onClick={() => {
                deletedID(person.id, person.name);
              }}
            >
              Remove{" "}
            </button>
          </div>
        );
      })}
    </>
  );
}
