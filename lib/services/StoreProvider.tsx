"use client";

import { configureStore, Middleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import activeLinkReducer from "./activeLinkSlice";
import { articlesApi } from "./articles";
import { experiencesApi } from "./experiences";
import { projectsApi } from "./projects";

export interface RootState {
  activeLink: string;
  [experiencesApi.reducerPath]: ReturnType<typeof experiencesApi.reducer>;
  [articlesApi.reducerPath]: ReturnType<typeof articlesApi.reducer>;
  [projectsApi.reducerPath]: ReturnType<typeof projectsApi.reducer>;
}

export default function StoreProvider({ children, initialState }: any) {
  const rootReducer = combineReducers({
    [experiencesApi.reducerPath]: experiencesApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    activeLink: activeLinkReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(experiencesApi.middleware as Middleware)
        .concat(articlesApi.middleware as Middleware)
        .concat(projectsApi.middleware as Middleware),
    preloadedState: initialState,
  });

  return <Provider store={store}>{children}</Provider>;
}
