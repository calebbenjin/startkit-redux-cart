import React from "react";
import { BsCart4 } from 'react-icons/bs'
import { SiRedux } from 'react-icons/si'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3><SiRedux /> ReduxCart</h3>
        <div className="nav-container">
          <BsCart4 className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
