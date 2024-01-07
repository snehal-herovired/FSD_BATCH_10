import React from 'react'

export default function Card({element}) {
    console.log(element);
  return (
    <div class="card" style={{ width: "18rem" }}>
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{element.product_name}</h5>
      <p class="card-text">{element.product_decsription}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}


