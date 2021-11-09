import React from "react";
import { FaPlus, FaMinus } from 'react-icons/fa'

const CartItem = ({ img, title, price, amount }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn">
          <FaPlus />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
