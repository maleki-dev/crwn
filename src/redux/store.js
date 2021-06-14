import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import { compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);
const persistor = persistStore(store);
export { store, persistor };
