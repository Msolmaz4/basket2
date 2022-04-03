import React, { useState } from "react";
import data from "./components/data";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Yan from "./components/Yandan/Yan";

function App() {
  const { productItem } = data;
  const [cartItem, setCartItem] = useState([]);

  const handleAdd = (item) => {
    const ProductExit = cartItem.find((x) => x.id === item.id);
    if (ProductExit) {
      setCartItem(
        cartItem.map((xy) =>
          xy.id === item.id
            ? { ...ProductExit, quantity: ProductExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }
  };


const handleRemove =(dx) =>{
  const ProductExit = cartItem.find((x) => x.id === dx.id);
  if(ProductExit.quantity === 1){
    setCartItem(cartItem.filter((item) => item.id !==dx.id));

  } else {
    cartItem.map((item)=>item.id === dx.id
    ? {...ProductExit,quantity: ProductExit.quantity -1}
    :item)
  }
}




  return (
    <div className="App">
      <Router>
        <Header cartItem={cartItem}/>
        <Yan
          productItem={productItem}
          cartItem={cartItem}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
      </Router>
    </div>
  );
}

export default App;
