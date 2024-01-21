import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import Card from './Card'

export default function ProductComp({id,setEnablebtn,enablebtn}) {
   const [singledata,setSingleData]=useState({})
   

  useEffect(()=>{
   const fetchdata =async()=>{
    const response =await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(response.data);
    setSingleData(response.data);
    setEnablebtn(false)
   }
   fetchdata()
  },[])
  return (
    <>
    {/* <div class="card" style={{width: "18rem"}}>
  <img src={singledata?.thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{singledata?.brand}</h5>
    <p class="card-text">{singledata?.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
  <Card element={singledata} enablebtn={enablebtn}/>
    
    </>
  )
}
