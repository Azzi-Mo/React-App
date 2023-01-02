/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Css_Style/Parallax.css'
const Parallax = () =>
{
    return (
        <>
        <section className="parallax-content2 parallax2 text-center" data-stellar-background-ratio="0.4"
         style={{backgroundPosition:" 0px 276.163px"}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>Baked fresh daily by bakers with passion.</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#" className="btn btn-lg btn-primary pull-left">Learn More <i className="icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Parallax