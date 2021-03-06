import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsToPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionName) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionName] : null
  );

export const selectShopIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIfCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
