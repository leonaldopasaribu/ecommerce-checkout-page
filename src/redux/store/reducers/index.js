import { combineReducers } from "redux";

import checkoutReducer from "./checkout.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  checkout: checkoutReducer,
  user: userReducer,
});
