import React from "react";

const Card = ({ cartItem ,handleAdd,handleRemove}) => {


const totalPrice =cartItem.reduce((price,dx)=>price + dx.quantity * dx.price,0)


  return (
    <div className="cart-item">
      <div className="cart-item-header"> card</div>
      {cartItem.length === 0 && (
        <div className="cart-item-empty"> es ıst nıcht Vorhanden</div>
      )}

      <div>
        {cartItem.map((dx) => (
          <div key={dx.id} className="cart-items-list">
            <img className="cart-items-image" src={dx.image} alt={dx.name} />
            <div className="cart-items-name">{dx.name}</div>
            <div className="cart-items-funct">
              <button className="cart-items-add" onClick={()=>handleAdd(dx)} >+</button>
              <button className="cart-items-remove" onClick={()=>handleRemove(dx)}>-</button>



            </div>
            <div> {dx.quantity}*{dx.price}</div>
            
          </div>
          
        ))}

      </div>
      <div>
              Total product
              <div>
                ${totalPrice}
              </div>
            </div>
    </div>
  );
};

export default Card;
