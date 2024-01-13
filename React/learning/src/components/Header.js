import React,{useState} from 'react'
import '../styles/header.css'
export default function Header() {
  // snehal
  //hooks :they are special function provided in functional component.
  //useState hook. : it helps us to maitain the initial and changed state of component.
  //     statevariable,stateFuntion
  // const [name,setName]=useState('Login') // intialstate store in statevaraible.
  const [toggle,setToggle]=useState(true)

  function changeName(){
    // here we will be updating the header state by using setName(stateFuntion)
    setToggle((prev)=>!prev)
  }

  let headerStyle={
    backgroundColor: toggle?"white":"black"
  }
  let fontstyle={
    color:toggle?"black":"white"
  }
// Mode : Dark and Light

  return (
    <div style={headerStyle}>
      <h4 onClick={changeName}>
       {
         toggle?<span style={fontstyle}>Login</span> :<span style={fontstyle}>Snehal</span>
       }

      </h4>
    </div>
  )
}
