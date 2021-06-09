import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { price, name, imageUrl, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">
      <span>&#10005;</span>
    </div>
  </div>
);

export default CheckoutItem;
