import React from 'react'

export default function Registration({setToggle}) {

  function closeModal(){
    setToggle(false)
  }
  return (
    <div>
      Registration
     <button onClick={closeModal}>X</button>

    </div>
  )
}
