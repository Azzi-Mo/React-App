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
      {products.map((product) => {
        return (
          <>
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <imag
                className="card-img-top"
                src={product.imag}
                alt="Card image cap"
              />

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default CardInfo;
