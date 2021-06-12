import { shopActionTypes } from "./shop.types";
import axios from "axios";

export const fetchShopDataStart = () => ({
  type: shopActionTypes.FETCH_SHOP_DATA_START,
});

export const fetchShopDataSuccess = ([shopData]) => ({
  type: shopActionTypes.FETCH_SHOP_DATA_SUCCESS,
  payload: shopData,
});

export const fetchShopDataFailure = (errMessage) => ({
  type: shopActionTypes.FETCH_SHOP_DATA_FAILURE,
  payload: errMessage,
});

export const fetchShopDataStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchShopDataStart());
    axios
      .get("http://localhost:3000/shop-data")
      .then((response) => {
        const shopData = response.data;
        dispatch(fetchShopDataSuccess(shopData));
      })
      .catch((error) => dispatch(fetchShopDataFailure(error.message)));
  };
};
