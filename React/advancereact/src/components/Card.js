import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card({element,enablebtn}) {
    const navigate =useNavigate()
    // console.log(enablebtn,"value for this");
  return (
    <div class="card" style={{width: "18rem"}}>
        <img src={element.thumbnail} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{element.brand}</h5>
          <h6>{element.category}</h6>
          <p class="card-text">{element.description}</p>
         
         {
            enablebtn && <button  class="btn btn-primary" onClick={()=>navigate(`/product/${element.id}`)}>View Product</button>
         }
          
        </div>
      </div>
  )
}
