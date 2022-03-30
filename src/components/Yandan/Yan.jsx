import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from '../Product/Products';



const Yan = ({productItem}) => {
  return (
    <div>
<Routes>
  
<Route path="/" element={<Products
productItem={productItem}
/>}/>
 <Route path="about"/>
 
</Routes>

    </div>
  )
}

export default Yan;
