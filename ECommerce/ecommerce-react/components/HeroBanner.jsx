import React from 'react'
import Link from 'next/link'
export default function HeroBanner() {
  return (
 <>
     <div className='hero-banner-container'>

       <div>
         <p className='bears-solo'> SMALL TEXT </p>
         <h3>MID TEXT</h3>
         <img src='' alt='headphones' className='hero-banner-image'/>
         
         <div >
          <Link href='/product/ID'>
            <button type='button'>BUTTON TEXT</button>
          </Link>
         </div>

       </div>
    </div>
 </>
  )
}
