import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
export default function Body({setEnablebtn,enablebtn}) {
 
  const [storeApidata,setStoreApiData] =useState([])


  useEffect(()=>{
  const fetchdata =async()=>{
    const response =await axios.get("https://dummyjson.com/products")
    // console.log(response.data.products);
    setStoreApiData(response.data.products)
    setEnablebtn(true)
  }
  fetchdata()
  },[])
  return (
    <>
     {
       storeApidata.length>0 ? 
       storeApidata.map((element,index)=>(
       <Card element={element} key={index} enablebtn={enablebtn} />

       ))
       :
       <div>No data available</div>
     }
    </>
  )
}
