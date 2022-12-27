import { useEffect, useState } from "react";
import Nav from "./Nav";
function MyApp(props) {


  const [products , setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5004/product")
      .then((res) => res.json())
      .then((Products) => setProducts(Products));
  },[]);

  return (
    <>
      <Nav />
      <button type="button" className="btn btn-success">
        Add Product
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>

            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=> {
            return (
              <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.category}</td>
            <td>{product.price}</td>

            <td>
              <button type="button" className="btn btn-primary">
                view
              </button>
              <button type="button" className="btn btn-success">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                delet
              </button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}
export default MyApp;
