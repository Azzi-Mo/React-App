import { useEffect, useState } from "react";
import Card from "./Card";
function CardInfo(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <section className="container">
        <div className="row">
          {products.map((prod) => {
            return (
              <div className="col-3" key={prod.id}>
                <Card prod={prod} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default CardInfo;
