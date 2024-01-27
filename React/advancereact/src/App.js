import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import { useState ,useContext} from 'react';
import UserContext from './contexts/UserContext';
import Register from './Pages/Register';
function App() {
 const ctx =useContext(UserContext);
 console.log(ctx);
  
  return (
    <>

      {
        ctx.enableHeader && <Header />
      }
      <Routes>
        <Route element={<HomePage />} path='/home' />
        <Route element={<ProductDetails />} path='/product/:id' />
        <Route element={<Login  />} path='/' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </>
  );
}

export default App;
