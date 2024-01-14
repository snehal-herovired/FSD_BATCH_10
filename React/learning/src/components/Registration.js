import React,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom';
export default function Registration() {
  const navigate =useNavigate();
  const[data,setData]=useState({
    username:'',
    email:'',
    password:''
  });
  const[userdetails,setUserDetails]=useState([])
 

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

function handleSubmit(){
  //single data, somehow array store

  //filter,map,reduce,find,includes
  setUserDetails((prev)=>(
    [
      ...prev,
      data
    
    ]
  ))
  // try to empty the input fields
  setData({
    username:'',
    email:'',
    password:''
  })
}

console.log(userdetails,"userdetails");

function samplefun(){
//
const a=false
if(a){
  navigate('/home')
}else{

  navigate('/')
}
}
  return (
    <div>
     <input placeholder='username'name='username' onChange={handleChange} value={data.username}/>
     <input placeholder='email' name='email'onChange={handleChange} value={data.email}/>
     <input placeholder='password' name='password' onChange={handleChange} value={data.password}/>
      <button onClick={handleSubmit}>Submit Again</button>
      {/* <Link to='/home' style={{textDecoration:'none'}}>Go to Homepage</Link> */}
      <button onClick={samplefun}>Homepage</button>
    </div>
  )
}
