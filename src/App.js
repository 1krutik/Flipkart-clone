// src/App.js
import "./App.css"
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import HomeScreen from "./Component/HomeScreen";
import Footer from "./Component/Footer";
import Alldata from "./Component/Products/Alldata";
import ProductDetail from "./Component/Products/ProductDetail";
import BuyPage from "./Pages/BuyPage";

const App = () => {
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          


          
            <Route path="/Login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/category" element={<Category />} /> */}
            <Route path="/alldata/:category" element={<Alldata />} />
            <Route path="/productdetails/:category/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<BuyPage />} />

          

        </Routes>
        <Footer />
      
    </div>
  );
};

export default App;
