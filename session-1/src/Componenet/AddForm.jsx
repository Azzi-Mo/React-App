import { useState } from "react";

function AddForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);


  const subMit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5004/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));

  }


  // console.log(title);
  // console.log(price);

  return (
    <>
      <form
        onSubmit={subMit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Product title </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> price</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="text"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddForm;
