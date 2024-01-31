import React, { useState } from 'react'
import axios from 'axios'
import APIorigin from '../Connection/connection'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const navigate =useNavigate()
   const [userdetail,setUserDetail] =useState({
   })
   const [error,setError]=useState(false)
   const[errorMsg,setErrorMsg] =useState('')


    function handleChange(event){
        
        setUserDetail((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))

    }

    async function submit(){
      try {
        const response  =await axios.post(`${APIorigin}/user/register`,userdetail)
      console.log(response);
      if(response.status===200){
        navigate('/')
      }
      
        
      } catch (error) {
        console.log(error);
        setError(true)
        setErrorMsg(error.message)
        
      }
    }
    
    return (
        <div className='login'>

            <div>
                <div class="mb-3">
                    <label class="form-label">Register yourself</label>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleUsername" class="form-label">Username</label>
                    <input type="text" class="form-control" id="exampleUsername" name='username' onChange={handleChange} value={userdetail.username}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange} value={userdetail.email}/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={handleChange} value={userdetail.password}/>
                </div>


                <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
            </div>
        {
            error && <div style={{color:"red"}}>{errorMsg}</div>
        }

        </div>
    )
}
