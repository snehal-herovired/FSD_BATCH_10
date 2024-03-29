import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
    const Uctx =useContext(UserContext);
  const navigate=useNavigate();

    function handleLogout(){
        Uctx.setIsAuthenticated(false);
        navigate('/')
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ECOM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
      {
        Uctx.isAuthenticated &&
        <li className="nav-item">
          <a className="nav-link"  onClick={handleLogout}>Logout</a>
        </li>
      }
     
     
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
      </form>
    </div>
  </div>
</nav>
  )
}
