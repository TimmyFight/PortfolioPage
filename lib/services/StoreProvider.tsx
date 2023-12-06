"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import activeLinkReducer from "./activeLinkSlice";

export interface RootState {
  activeLink: string;
}

export default function ReduxProvider({ children, initialState }: any) {
  const store = configureStore<RootState>({
    reducer: { activeLink: activeLinkReducer },
    preloadedState: initialState,
  });

  return <Provider store={store}>{children}</Provider>;
}
