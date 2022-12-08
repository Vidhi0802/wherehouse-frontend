import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const App = () => {

  const navigate = useNavigate();
  return (
    <div> 
      <Routes>
        <Route exact path="/" element={<Home  navigate={navigate}/>}>
        </Route>
        <Route path="/productList" element={<ProductList navigate={navigate}/>}>
        </Route>
        <Route path="/register" element={<Register navigate={navigate}/>}>
        </Route>
        <Route path="/login" element={<Login navigate={navigate}/>}>
        </Route>
        <Route path="/cart" element={<Cart navigate={navigate}/>}>
        </Route>
        <Route path="/product" element={<Product navigate={navigate}/>}>
        </Route>
        <Route path="/brands" element={<Brands navigate={navigate}/>}>
        </Route>
        <Route path="/categories" element={<Categories navigate={navigate}/>}>
        </Route>
      </Routes>
    </div>
  )
};


export default App;