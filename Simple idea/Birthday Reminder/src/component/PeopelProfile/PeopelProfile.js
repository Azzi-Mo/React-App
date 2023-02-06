import React, { useEffect, useState } from "react";
import "./PeopelProfileStyle.css";
import Swal from "sweetalert2";

export default function PeopelProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/peopels")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // fUNC TO DELETE PRODUCTS
  const deProductID = (PID, name) => {
    Swal.fire({
      title: ` You will delet ( ${name} )`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Your ID ${PID} has been deleted.`, "success");
        fetch(`http://localhost:5000/peopels/${PID}`, { method: "delete" })
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    });
  };

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
            <button
              onClick={() => {
                deProductID(peopel.id, peopel.name);
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
