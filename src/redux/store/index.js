import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["checkout"],
};

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
}
