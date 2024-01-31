
import './App.css';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import Register from './Pages/Register';
import Header from './components/Header';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import UserContext from './contexts/UserContext';
import { useContext } from 'react';
import LoginFallback from './components/LoginFallback';
function App() {
  const userCtx= useContext(UserContext)
  return (
    <>
      {
        userCtx.enableHeader && <Header/>
      }
      <Routes>
      
        <Route path='/productdetail' element={
        userCtx.isAuthenticated ?<ProductDetails /> : <LoginFallback/>
        
        
        } />
     
        <Route path='/home' element={
        userCtx.isAuthenticated ? <HomePage /> :<Navigate to="/"/>
        } />
        
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
