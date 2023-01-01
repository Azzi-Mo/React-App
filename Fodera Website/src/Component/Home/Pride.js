import '../Css_Style/prid.css'
import pridimg from '../imgs/1.jpg'
const Pride = () =>
{
    return(
        <>
        <section className="pride">
        
        <div className="container">
          <div className="row">
          
           <div className="col-md-6">
           <img src={pridimg}></img>
           </div>

           <div className="col-md-6">
           <h1>We pride ourselves on making real food from the best ingredients.</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
           <button>lear more</button>

           
           </div>

          </div>
        </div>
        </section>
        </>
    )
}
export default Pride