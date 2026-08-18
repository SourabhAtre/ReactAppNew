import './App.css'
import { useState } from 'react'
import { CartProvider } from "./context/CartContext";

// for Routes starts
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Search from "./pages/Search";
import Footer from "./components/Footer";
// for Routes ends

import AnnBar from './components/AnnBar.jsx'
import IngredientSection from './components/IngredientSection.jsx'
import FlipSection from './components/FlipSection.jsx';
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";

function App() {
  return (
    <BrowserRouter>
    <CartProvider> 
      <AnnBar />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
      </CartProvider> 
      </BrowserRouter>
    )
}

export default App
