import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
const persistor = persistStore(store);
export { store, persistor };
