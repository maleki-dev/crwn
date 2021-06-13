import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import * as S from "./cart-icon.styles";

const CartIcon = () => {
  const itemsCount = useSelector((state) => selectCartItemsCount(state));
  const dispatch = useDispatch();

  return (
    <S.CartIcon onClick={() => dispatch(toggleCartHidden())}>
      <S.ShoppingIcon />
      <S.ItemCount> {itemsCount} </S.ItemCount>
    </S.CartIcon>
  );
};

export default CartIcon;
