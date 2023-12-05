import { configureStore } from "@reduxjs/toolkit";
import activeLinkReducer from "./activeLinkSlice";

export interface RootState {
  activeLink: string;
}

const store = configureStore({
  reducer: { activeLink: activeLinkReducer },
});
export default store;
