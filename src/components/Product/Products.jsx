import React from 'react'
import './Products.css'

const Products = ({productItem,handleAdd}) => {
  return (
    <div className='products'>
        {
            productItem.map((item)=>(
                <div className='card'>
                    <div>
                        <img  className='product-image'
                        src={item.image}
                        alt={item.name}/>
                    </div>
                    <div>
                        <h3 className='product.name'>{item.name}</h3>
                    </div>
                    <div className='product-price'> {item.price}</div>

                <button className='product-add-button' onClick={()=>handleAdd(item)}>Add</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products;