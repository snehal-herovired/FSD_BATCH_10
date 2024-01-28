import React, { useState,useContext } from 'react'
import axios from "axios"
import API from '../connection/connection';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import HeaderContext from '../contexts/HeaderContext';
export default function Login() {
 const ctx =useContext(UserContext);
 const hctx =useContext(HeaderContext);
 console.log(ctx);
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
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("login","true");
      hctx.setUsername(data.username)
      navigate('/home')
       ctx.setEnableHeader(true)
       ctx.setLogin(true)
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
