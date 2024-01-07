import React from 'react'

import '../styles/body.css'
import Card from './Card'
import product from '../mockdata/product'
// we are going to create component which renders based on data;
export default function Body() {
  
  // how to map aarrays in react
  // how to provide data from one component to another("from parent to child")
  return (
    <div className='box'>
      <h4>Best Mobile</h4>
    
    {
      product.length!==0 ?  
       product.map((element)=>(
        <Card  element={element}/>
       ))
      :<div>No data</div>
    }
   {/* <Card/> */}

    </div>
  )
}
