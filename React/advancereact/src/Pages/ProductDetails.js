import React from 'react'
import ProductComp from '../components/ProductComp'
import { useParams } from 'react-router-dom'
export default function ProductDetails({setEnablebtn,enablebtn}) {
   const {id} =useParams();
   console.log(id,"coming from main body");

  return (
    <>
    <ProductComp id={id} setEnablebtn={setEnablebtn} enablebtn={enablebtn}/>
    </>
  )
}
