import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [Products, setProducts] = useState([]);
  const GetAllProd = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => 
      {

        setProducts(data);
        console.log(data);
      })
  };
  useEffect(() => {
    GetAllProd();
  }, []);
  
  // fUNC TO DELETE PRODUCTS
  const deProductID = (PID) => {
    Swal.fire({
      title: `Are you sure u want delet ID ${PID}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `Your ID ${PID} has been deleted.`, "success");
        fetch(`http://localhost:9000/products/${PID}`, { method: "delete" })
          .then((res) => res.json())
          .then((data) => GetAllProd());
      }
    });
  };
  return (
    <>
      <h5>products page</h5>
      <Link className="btn btn-success m-10" to="/AddProduct">
        add new product
      </Link>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col-5">Title</th>
            <th scope="col">Price</th>
            <th scope="col-2">operation</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((prod) => {
            return (
              <>
                <tr key={prod.id}>
                  <th scope="row">{prod.id}</th>
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        deProductID(prod.id);
                      }}
                    >
                      delete
                    </button>
                    <button className="btn btn-success btn-sm">edite</button>
                    <Link
                      to={`/products/${prod.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      view
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
