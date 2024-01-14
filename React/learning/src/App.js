import './App.css';
import "./registration.css"
import HomePage from './pages/HomePage';
import {BrowserRouter ,Routes,Route}  from "react-router-dom"
import Registration from './components/Registration';

//How component talk to each other.(props)
//How component update each other and themselves.
function App() {
  // let styleobj={
  //   backgroundColor:"red",
  //   color:'yellow'
  // }
  // username,email and password  and button;
  // inline style;
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Registration/>} path="/" />
    </Routes>
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
