import React from "react";
import { Route } from "react-router-dom";

import Collection from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={Collection} />
  </div>
);

export default ShopPage;
