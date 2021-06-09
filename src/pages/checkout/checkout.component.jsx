import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { selectItemsCount } from "../../redux/cart/cart.selectors";
import "./checkout.styles.scss";

const CheckoutPage = ({ total, cartItems }) => (
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

const mapStateToProps = createStructuredSelector({
  total: selectItemsCount,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
