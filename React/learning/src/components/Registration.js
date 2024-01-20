import React,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Header from './Header';
import InsideRegister from './InsideRegister';
export default function Registration({setData,data}) {
  console.log("Hi I am  register component and i am rendering")
  const navigate =useNavigate();

  // const[userdetails,setUserDetails]=useState([])
 

  // dynamic data manipulation
  

// console.log(data,"my data");

// function handleSubmit(){
//   //single data, somehow array store

//   //filter,map,reduce,find,includes
//   setUserDetails((prev)=>(
//     [
//       ...prev,
//       data
    
//     ]
//   ))
//   // try to empty the input fields
//   setData({
//     username:'',
//     email:'',
//     password:''
//   })
// }

// console.log(userdetails,"userdetails");

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
      
      <InsideRegister  setData={setData} data={data}/>
      {/* <Link to='/home' style={{textDecoration:'none'}}>Go to Homepage</Link> */}
      <button onClick={samplefun}>Homepage</button>
    </div>
  )
}
