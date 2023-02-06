import React, { useState } from "react";
import Data from "../../../db";
import "./PeopelProfileStyle.css";
import Swal from "sweetalert2";

export default function PeopelProfile() {
  const [data, setData] = useState(Data);

  fetch(data).then((res)=>res.json()).then((data) => console.log(data.id));
  // fUNC TO DELETE PRODUCTS
  // const deProductID = (PID) => {
  //   Swal.fire({
  //     title: `Are you sure u want delet ID ${PID}`,
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", `Your ID ${PID} has been deleted.`, "success");
  //       fetch(`http://localhost:9000/products/${PID}`, { method: "delete" })
  //         .then((res) => res.json())
  //         .then((data) => setData(data));
  //     }
  //   });
  // };

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
            //  onClick={() => {
            //   deProductID(peopel.id);
            // }}
            >Remove </button>
          </div>
        );
      })}
    </>
  );
}
