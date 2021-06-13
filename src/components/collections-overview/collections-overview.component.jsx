import React from "react";

import { useSelector } from "react-redux";
import { selectCollectionsToPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import "./collections-overview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector((state) => selectCollectionsToPreview(state));
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
