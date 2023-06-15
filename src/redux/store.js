const { configureStore, combineReducers } = require("@reduxjs/toolkit");

import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
