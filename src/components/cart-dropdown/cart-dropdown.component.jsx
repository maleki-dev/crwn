import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <div className="empty-cart">Your cart is empty!</div>
      )}
    </div>

    <CustomButton
      onClick={() => {
        history.push("./checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go To Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
