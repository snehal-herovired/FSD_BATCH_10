import React,{useState} from 'react'
import '../styles/header.css'
import Registration from './Registration'
export default function Header() {
  // snehal
  //hooks :they are special function provided in functional component.
  //useState hook. : it helps us to maitain the initial and changed state of component.
  //     statevariable,stateFuntion
  // const [name,setName]=useState('Login') // intialstate store in statevaraible.
  const [toggle,setToggle]=useState(false)

  function OpenModal(){
    // here we will be updating the header state by using setName(stateFuntion)
    setToggle(true)
  }

  let headerStyle={
    backgroundColor: toggle?"white":"black"
  }
  let fontstyle={
    color:toggle?"black":"white"
  }
// Mode : Dark and Light
//Opening of Modal.

// Assignment of the Day :
// Implement light and dark mode in the E-commerce project and also integrate
// login and register modal in the same and push the code on github.

  return (
    <>
    
    <div style={{}}>
      <h4 onClick={OpenModal}>
        Login
      </h4>
    </div>

     {

      toggle && <div style={{height:"100%",width:"100%",background:"grey",position:"fixed",top:'0',left:"0"}}>
      <Registration setToggle={setToggle}/>
    </div>
    
     

     }

    </>
  )
}
