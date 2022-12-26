import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CardDetails() {
  let params = useParams();
  let [prodCard, setProdCard] = useState();
  console.log(params.CardDetails);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.CardDetails}`)
      .then((res) => res.json())
      .then((data) => data.title);
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" alt={prodCard.title} />

        <div className="card-body">
          <h5 className="card-title">{prodCard.title}</h5>
          <p className="card-text"></p>
          <a href="/#" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </>
  );
}
export default CardDetails;
