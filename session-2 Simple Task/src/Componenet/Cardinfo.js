/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";

function CardInfo() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>

      <section className="Sec_Handler">
        {products.map((product) => {
          return (
            <>
              <div className="card" style={{ width: "18rem" }} key={product.id}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />

                <div className="card-body">
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.title}</p>
                  <a href="/#" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
export default CardInfo;
