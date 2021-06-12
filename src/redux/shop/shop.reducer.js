// import SHOP_DATA from "../../pages/shop/shop.data";
import { shopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_SHOP_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case shopActionTypes.FETCH_SHOP_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
