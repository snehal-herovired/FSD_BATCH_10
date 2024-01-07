import './App.css';
import "./registration.css"
import Header from './components/Header';
import Subheader from './components/Subheader';
import Body from './components/Body';
import FashionOpt from './components/FashionOpt';
function App() {
  // let styleobj={
  //   backgroundColor:"red",
  //   color:'yellow'
  // }
  // username,email and password  and button;
  // inline style;
  return(
    <>
     <Header/>
     <Subheader/>
     <Body/>
     {/* <FashionOpt/> */}
    
    </>
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
