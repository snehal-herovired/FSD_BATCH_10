import React, { useState } from 'react'
import axios from "axios"
import API from '../connection/connection';
import { useNavigate } from 'react-router-dom'
export default function Login({setEnableHeader}) {
  const [data, setData] = useState({
    email:'',
    username:'',
    password:''
  });
  // const [showerror, setShowError] = useState({
  //   email:false,
  //   username:false,
  //   password:false
  // })
  const [showerror,setShowError]=useState(false)
  
  const [errormessage,setErrorMsg]=useState('')
  const navigate = useNavigate();

  function handleChange(event) {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  async function handleSubmit() {
  try {
    // if(data.email==''){
    //   setShowError((prev)=>(
    //     {
    //       ...prev,
    //       email:true
    //     }
    //   ))
    // }
    // if(data.username==""){
    //   setShowError((prev)=>(
    //     {
    //       ...prev,
    //       username:true
    //     }
    //   ))
    // }


    const response =await axios.post(`${API}/user/login`,data)
    console.log(response,"log from try block");
    if(response.status===200){
      navigate('/home')
      setEnableHeader(true)
    }else{
      setShowError(true)
      setErrorMsg(response.data.message)
    }
  } catch (error) {
    console.log(error.message,"error from catch block");
    setShowError(true);
    setErrorMsg("Something went wrong")  
  }

     
   
  }
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} value={data.email}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Username</label>
        <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="username" onChange={handleChange} value={data.username}/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="text" name='password' className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={handleChange}  value={data.password} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
     {
      showerror && <div style={{color:"red"}}>{errormessage}</div>
     }

   {/* {
    showerror.email && <div>Email not entered</div>
   }
   {
    showerror.username && <div>Username not entered</div>
   } */}

    </>
  )
}
