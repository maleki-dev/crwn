import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import * as S from "./cart-dropdown.styles";
// import "./cart-dropdown.styles.scss";
// import CustomButton from "../custom-button/custom-button.component";

const CartDropDown = ({ history }) => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();
  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <S.EmptyCart>Your cart is empty!</S.EmptyCart>
        )}
      </S.CartItems>

      <S.CartCustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </S.CartCustomButton>
    </S.CartDropdown>
  );
};

export default withRouter(CartDropDown);
