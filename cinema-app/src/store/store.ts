import { configureStore } from "@reduxjs/toolkit";
import { FAVORITE_KEY, movieSlice } from "./movie.slice";
import { saveState } from "./storage";
import { Favorites } from "../pages/Favorites/Favorites";

export const store = configureStore( {
	reducer: {
		movie: movieSlice.reducer
	} 
})

store.subscribe(() => {
	saveState({favorites: store.getState().movie.favorites}, FAVORITE_KEY)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
