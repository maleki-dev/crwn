import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectItemsCount } from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const total = useSelector((state) => selectItemsCount(state));
  const cartItems = useSelector((state) => selectCartItems(state));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">${total}</div>
    </div>
  );
};

export default CheckoutPage;
