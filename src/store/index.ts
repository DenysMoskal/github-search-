import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/githubApi";
import { githubReducer } from "./github/githubSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
