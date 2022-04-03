import React from "react";
import "./header.css";
import { Link } from "react-router-dom";



const Header = ({cartItem}) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="Logo">
            Kleidung
          </Link>
        </h1>
      </div>
      <div className="header-links">
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
          </ul>
          <ul>
              <li>
                  <Link to='/Signup'>Signup</Link>
              </li>
          </ul>
          <ul>
              <li>
                  <Link to='/Cart' className="cart">
                  <i class="fas fa-shopping-cart"></i>
                  <span>
                    {cartItem.length === 0 ? '' : cartItem.length}
                  </span>

                  </Link>
              </li>
          </ul>
      </div>
    </header>
  );
};

export default Header;
