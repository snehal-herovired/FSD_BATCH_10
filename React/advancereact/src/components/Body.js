import axios from 'axios'
import React ,{useEffect,useState,useContext}from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
// import UserContext from '../contexts/UserContext'
import ProductContext from '../contexts/ProductContext'
export default function Body() {
 const ctx =useContext(ProductContext);
 console.log(ctx,"from body");
  const [storeApidata,setStoreApiData] =useState([])


  useEffect(()=>{
  const fetchdata =async()=>{
    const response =await axios.get("https://dummyjson.com/products")
    // console.log(response.data.products);
    setStoreApiData(response.data.products)
     ctx.setEnablebtn(true)
  }
  fetchdata()
  },[])
  return (
    <>
     {
       storeApidata.length>0 ? 
       storeApidata.map((element,index)=>(
       <Card element={element} key={index}  enablebtn={ctx.enablebtn}/>

       ))
       :
       <div>No data available</div>
     }
    </>
  )
}
