import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import API from '../connection/connection'
export default function Register() {
  const[registerdata,setRegisterData]=useState({});
  const navigate =useNavigate();


    function handleChange(event){
     setRegisterData((prev)=>(
        {
            ...prev,
            [event.target.name]:event.target.value
        }
     ))
    }
 
  async function PopulatetoDB(){
     const response =await axios.post(`${API}/user/register`,registerdata)
     console.log(response);
     if(response.status===200){
        navigate('/')
     }
  }
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Username</label>
        <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="pegasis1234" onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="text" name='password' className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={handleChange} />
      </div>
      <button onClick={PopulatetoDB}>Submit</button>
   

    </>
  )
}
