import React,{useState}from 'react'

export default function Registration() {
  
  const[data,setData]=useState({})
 

const a ={id:1,age:12}
console.log({...a});
  // dynamic data manipulation
  
function handleChange(event){
console.log(event.target.name ,event.target.value);
setData((prev)=>(
  {
  ...prev,
    [event.target.name]:event.target.value
  }
))
}

console.log(data,"my data");

  return (
    <div>
     <input placeholder='username'name='username' onChange={handleChange}/>
     <input placeholder='email' name='email'onChange={handleChange}/>
     <input placeholder='password' name='password' onChange={handleChange}/>
      <button>Register</button>
    </div>
  )
}
