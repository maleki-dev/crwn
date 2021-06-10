import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import * as S from "./cart-icon.styles";
// import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
// import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <S.CartIcon onClick={toggleCartHidden}>
    <S.ShoppingIcon />
    <S.ItemCount> {itemsCount} </S.ItemCount>
  </S.CartIcon>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
