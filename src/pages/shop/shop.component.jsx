import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShopDataStartAsync } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overveiw.container";
import CollectionContainer from "../../components/collection/collection.container";

const ShopPage = ({ match, fetchShopDataStartAsync }) => {
  useEffect(() => {
    fetchShopDataStartAsync();
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

const mapDispatchToProps = (dispatch) => ({
  fetchShopDataStartAsync: () => dispatch(fetchShopDataStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
