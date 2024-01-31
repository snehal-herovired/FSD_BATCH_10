import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginFallback() {
  return (
    <div>
        You are not Loggedin yet.
        Please Login ....
   <Link to="/"> Login</Link>
    </div>
  )
}
