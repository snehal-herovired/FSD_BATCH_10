import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import { useState } from 'react';
function App() {
  const [enableHeader, setEnableHeader] = useState(false)
  return (
    <>

      {
        enableHeader && <Header />
      }
      <Routes>
        <Route element={<HomePage />} path='/home' />
        <Route element={<ProductDetails />} path='/product/:id' />
        <Route element={<Login setEnableHeader={setEnableHeader} />} path='/' />
      </Routes>
    </>
  );
}

export default App;
