import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetalis.scss";
function ProductDetails() {
    let [product, setProduct] = useState();
    let { ProductsID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ProductsID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data)
      );
  }, []);
  return (
    <>
      <section>
            {product && 
            
              <section className="container">
              <div className="row">
                <section className="Card_up">
                  <div className="img_up">
                    <img src={product.image}></img>
                  </div>
                  <div className="info_up">
                    <div className="dv1_ch_info">
                      <p>{product.category}</p>
                      <p>
                        {" "}
                        {product.title}
                      </p>
                      <p>
                        {" "}
                         {product.description}
                      </p>
                    </div>
                    <div className="dv2_ch_info">
                      <div className="Price_up">
                        <p className="Pirce">{product.price}</p>
                        <p className="oldPrice">{product.price + 70}</p>
                      </div>
                      <div className="btn_up">
                        <button className="btn"> Add to card</button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>

            }
      </section>
    </>
  );
}
export default ProductDetails;
