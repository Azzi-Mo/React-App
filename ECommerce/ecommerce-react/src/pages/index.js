import React from 'react'
import { Product , FooterBanner , HeroBanner, Footer , } from 'components'
const Home = () => {
  return (
   <>
   <HeroBanner/>

            <div className='products-heading'>

                <h2>Beset Selling Products </h2>
                <p>Speakers of many variations</p>

            </div>
           
          <div className='products-container'>
            {['Prod1','Prod2'].map(
                (prod) => prod
            )}
          </div>

  <Footer/>
   </>
  )
}
export default Home