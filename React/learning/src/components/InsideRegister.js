import React from 'react'

export default function InsideRegister({setData,data}) {

   console.log("Hi I am inside register component and i am rendering")


    function handleChange(event){
        console.log(event.target.name ,event.target.value);
        setData((prev)=>(
          {
          ...prev,
            [event.target.name]:event.target.value
          }
        ))
        }
        
    return (
        <>
            <input placeholder='username' name='username' onChange={handleChange} value={data.username} />
            <input placeholder='email' name='email' onChange={handleChange} value={data.email} />
            <input placeholder='password' name='password' onChange={handleChange} value={data.password} />
            <button >Submit Again</button>
        </>
    )
}
