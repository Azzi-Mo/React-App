import Data from "../Data.js";
import "../Css_Style/Blogs.css";
const Blogs = () => {
  console.log(Data);

  return (
    <>
      <section className="Blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>Explore Our Foods</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
            <div className="col-md-12 col-lg-12">
              {Data.map((item) => {
                return (
                  <>
                    <div className="box" key={item.id}>
                      <div>
                        <img src={item.img} alt="img"></img>
                      </div>
                      <div className="info">
                        <h3>{item.title}</h3>
                        <p>{item.time}</p>
                        <span>
                          {item.newPrice}
                          <h6>
                          {item.oldPrice}
                          </h6>
                        </span>
                        <div class="bottom-wrap">
                              <a href="" class="btn btn-sm btn-primary float-right" data-toggle="modal" data-target="#modalContactForm">Order Now</a>
                            </div>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <div className="box">
                <div>
                  <img></img>
                </div>
                <div>
                  <h3>Rainbow Vegetable Sandwich</h3>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    $10.50<h6></h6>$11.70
                  </span>
                </div>
              </div> */}

              {/* <div className="box">
                <div>
                  <img></img>
                </div>
                <div>
                  <h3>Rainbow Vegetable Sandwich</h3>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    $10.50<h6></h6>$11.70
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blogs;
