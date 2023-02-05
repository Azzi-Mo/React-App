import React, { useState } from 'react'
import Data from '../data/db'
export default function PeopelProfile() {
    const  [data , useData] = useState()
    fetch(Data).then((res)=> res.json()).then((data)=> console.log(data))
  return (
    <div className='peopelProfile'>
      
    <div >
      <img src="" alt="" />
    </div>
    <div className='content'>
      <p className='name'></p>
      <p className='age'></p>
    </div>

  </div>
  )
}
