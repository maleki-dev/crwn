import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShopDataStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
  selectShopIsFetching,
  selectIfCollectionLoaded,
} from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import Collection from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const ShopPage = ({
  match,
  fetchShopDataStartAsync,
  isFetchingCollection,
  isCollectionLoaded,
}) => {
  useEffect(() => {
    fetchShopDataStartAsync();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            isLoading={isFetchingCollection}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) => (
          <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchShopDataStartAsync: () => dispatch(fetchShopDataStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectShopIsFetching,
  isCollectionLoaded: selectIfCollectionLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
