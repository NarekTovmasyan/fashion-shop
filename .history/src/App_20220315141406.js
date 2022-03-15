import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <Products/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
        <Slides slides={slides} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import "h8k-components";

import Slides from "./components/Slides";
const title = "Slideshow App";

function App({ slides }) {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="App">
        <Slides slides={slides} />
      </div>
    </div>
  );
}