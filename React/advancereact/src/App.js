import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import { useState } from 'react';
import Register from './Pages/Register';
function App() {
  const [enableHeader, setEnableHeader] = useState(false)
  const [enablebtn,setEnablebtn] =useState(true)
  return (
    <>

      {
        enableHeader && <Header />
      }
      <Routes>
        <Route element={<HomePage setEnablebtn={setEnablebtn} enablebtn={enablebtn}/>} path='/home' />
        <Route element={<ProductDetails setEnablebtn={setEnablebtn} enablebtn={enablebtn}/>} path='/product/:id' />
        <Route element={<Login setEnableHeader={setEnableHeader} />} path='/' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </>
  );
}

export default App;
