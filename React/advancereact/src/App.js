import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Routes, Route ,Navigate} from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import { useState ,useContext} from 'react';
import UserContext from './contexts/UserContext';
import Register from './Pages/Register';
function App() {
 const ctx =useContext(UserContext);
 console.log(ctx);



 // protected pages and persisiting data
// state ,protected routing ....issue(redirection)
//
  
  return (
    <>

      {
        ctx.login && <Header />
      }
      <Routes>
        {
          ctx.login &&
        <Route element={<HomePage />} path='/home' /> 
        }
        {
          ctx.login && 
        <Route element={<ProductDetails />} path='/product/:id' />
        }
        <Route element={<Login  />} path='/' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </>
  );
}

export default App;
