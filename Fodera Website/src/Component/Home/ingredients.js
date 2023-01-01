import imgbyhand from '../imgs/2.png'
import '../Css_Style/ingredients.css'
const ingredients = () =>
{
    return (
      <>
        <section className="ingredients">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
              
              <h1>We make everything by hand with the best possible ingredients.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>

              <span>
              <i></i>
              <p></p>
              </span>
              <span>
              <i></i>
              <p></p>
              </span>
              <span>
              <i></i>
              <p></p>
              </span>

              <button>learn more</button>
              
              </div>

              <div className="col-md-6">
                <img src={imgbyhand} alt="imgbyhand"></img>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default ingredients