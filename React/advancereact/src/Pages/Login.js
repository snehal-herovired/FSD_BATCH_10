import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Login({ setEnableHeader }) {
  const [data, setData] = useState({});
  const [showerror, setShowError] = useState(false)
  const navigate = useNavigate();

  function handleChange(event) {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  async function handleSubmit() {
    try {

      //logic data.email or data.password ;
      //logic to call api and send the data to backend.
      const login = true;
      //   const response =await axios.post("http://localhost:5000/login",data)
      //   console.log(response.data);
      //  //  {
      //  message,
      // token,
      // login :true
      // }
      if (login) {
        navigate('/home')
        setEnableHeader(true)
      } else {
        setShowError(true)
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="text" name='password' className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {
        showerror && <div>Not Able to login in</div>
      }


    </>
  )
}
