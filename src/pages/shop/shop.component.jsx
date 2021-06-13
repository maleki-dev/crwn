import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { fetchShopDataStartAsync } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overveiw.container";
import CollectionContainer from "../../components/collection/collection.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopDataStartAsync());
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default ShopPage;
