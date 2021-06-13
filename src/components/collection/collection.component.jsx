import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const Collection = ({ match }) => {
  const collection = useSelector((state) =>
    selectCollection(match.params.categoryId)(state)
  );
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
