import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "../Card/Card";
import Products from "../Product/Products";
import Signup from "../Signup/Signup";

const Yan = ({ productItem, cartItem, handleAdd ,handleRemove}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Products productItem={productItem} handleAdd={handleAdd} />}
        />
        <Route path="about" />

        <Route path="/signup" element={<Signup />} />
        <Route
          path="/Cart"
          element={<Card handleAdd={handleAdd} cartItem={cartItem}  handleRemove={handleRemove}/>}
        />
      </Routes>
    </div>
  );
};

export default Yan;
