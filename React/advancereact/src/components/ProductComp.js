import axios from 'axios'
import React, { useEffect ,useState,useContext} from 'react'
import Card from './Card'
// import UserContext from '../contexts/UserContext'
import ProductContext from '../contexts/ProductContext'


export default function ProductComp({id}) {
   const [singledata,setSingleData]=useState({})
   const ctx =useContext(ProductContext);
   console.log(ctx);
   

  useEffect(()=>{
   const fetchdata =async()=>{
    const response =await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(response.data);
    setSingleData(response.data);
    ctx.setEnablebtn(false)
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
  <Card element={singledata} enablebtn={ctx.enablebtn} />
    
    </>
  )
}
