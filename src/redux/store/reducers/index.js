import { combineReducers } from "redux";

import checkoutReducer from "./checkout.reducer";

export default combineReducers({
  checkout: checkoutReducer,
});
