/* eslint-disable jsx-a11y/alt-text */
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import "./CardDetalis.scss";
function CardDetalis() {
  const params = useParams()
  const [ product , setProduct ] = useState([])
  const api_url = 'https://fakestoreapi.com/products/'
  useEffect( () => {
    fetch(`${api_url}/${params.productId}`).then( (res)=> res.json() ).then( (data) => {

      setProduct(data)

    } )
  } )
  return (
    <>
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
    </>
  );
}
export default CardDetalis;
