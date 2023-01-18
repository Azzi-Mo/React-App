import { useState } from "react";
import axios from "axios";
function AddProduct() {
  const [prodID, setIDProd] = useState("");
  const [prodTitle, setprodTitle] = useState(0);

  const submitPrevent = (e) => {
    e.preventDefault();

    console.log(prodID);
    console.log(prodTitle);
    fetch('http://loclhost:9000/products',{
      method:'POST',
      headers:{'Content-Type':'Application/json'},
      body:{
        
      }
    })

  };
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={submitPrevent}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">ID product</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setIDProd(e.target.value);

            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setprodTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default AddProduct;
