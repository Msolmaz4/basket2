import React from 'react'
import { Routes, Route, Router } from "react-router-dom";
import Card from '../Card/Card';
import Products from '../Product/Products';
import Signup from '../Signup/Signup';



const Yan = ({productItem,cartItem}) => {
  return (
    <div>
<Routes>
  
<Route path="/" element={<Products
productItem={productItem}
/>}/>
 <Route path="about"/>

 <Route path='/signup' element={<Signup/>}/>
 <Route path='/Cart' element={<Card/>}/>
</Routes>

    </div>
  )
}

export default Yan;
