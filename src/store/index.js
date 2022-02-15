import { combineReducers, createStore } from "redux";
import pizzaReducer from "./pizzas/reducer"
import userReducer from "./user/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  //always register your reducer here
  combineReducers({
    pizzas: pizzaReducer,
    user: userReducer
  }),
  enhancer
);

export default store;