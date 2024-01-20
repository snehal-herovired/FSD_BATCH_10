import './App.css';
import "./registration.css"
import HomePage from './pages/HomePage';
import {BrowserRouter ,Routes,Route}  from "react-router-dom"
import Registration from './components/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import axios from 'axios';

//How component talk to each other.(props)
//How component update each other and themselves.
function App() {
  console.log("Hi I am App  component and i am rendering")
  // let styleobj={
  //   backgroundColor:"red",
  //   color:'yellow'
  // }
  // username,email and password  and button;
  // inline style;
  
  const[data,setData]=useState({
    username:'',
    email:'',
    password:''
  });

  const [productdata,setProductData]=useState([])
  // 2 arguments, one is callback and another is dependecy array.
  //UseEffect is used for sideEffect.
  //API call .
  //npm i axios
  //Use case of Dependancy array:
  // 1. When array is empty : External API 
  // 2. if depency array is dependant on some state.
  useEffect(()=>{
   
    const fetchdata=async()=>{
      const response =await axios.get('https://dummyjson.com/products');
      // console.log(response.data.products)
      setProductData(response.data.products)
    }
   fetchdata()
  },[])

 console.log("this is product data",productdata);

  return(
    <BrowserRouter>
    <Header data={data} />
    <Routes>
      <Route element={<Registration setData={setData} data={data}/>} path="/" />
      <Route element={<HomePage/>} path='/home'/>
    </Routes>
    <Footer/>
     {/* <img src='/images/'/> */}

     {/* <FashionOpt/> */}
    
    </BrowserRouter>
  )
}


//react uses jsx
//how to enable writing javascript in return statement : {}
//Enclose individual tags in either react fragment <></> or div.
// in react there is no tag without its end tag.
//in react there is no class .we have className;
// class is keyword ; in class component ;
// inline style :- we use style which takes in js object.
export default App;
