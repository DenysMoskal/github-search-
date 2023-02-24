import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

export interface githubState {
  favorites: string[];
}

const initialState: githubState = {
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavirite(state, action: PayloadAction<string>) {
      state.favorites = [...state.favorites, action.payload];
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const { addFavirite, removeFavorite } = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
