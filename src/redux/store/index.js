import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/home_reducer";

const bigReducer = combineReducers({
   home: homeReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
