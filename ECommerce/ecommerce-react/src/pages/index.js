import React from 'react'

const Home = () => {
  return (
   <>

            <div className='products-heading'>

                <h2>Beset Selling Products </h2>
                <p>Speakers of many variations</p>

            </div>

          <div className='products-container'>
            {['Prod1','Prod2'].map(
                (prod) => prod
            )}
          </div>

   </>
  )
}
export default Home