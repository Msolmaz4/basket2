import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from '../Product/Products';

export const Yan = () => {
  return (
    <div>
<Routes>
  
<Route path="/" element={<Products/>}/>
 <Route path="about"/>
  
</Routes>


    </div>
  )
}
