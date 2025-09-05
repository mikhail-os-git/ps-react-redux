import { configureStore } from "@reduxjs/toolkit";
import { FAVORITE_KEY, movieSlice } from "./movie.slice";
import { saveState } from "./storage";
import { Favorites } from "../pages/Favorites/Favorites";
import { USER_KEY, userSlice } from "./user.slice";

export const store = configureStore( {
	reducer: {
		movie: movieSlice.reducer,
		user: userSlice.reducer
	} 
})

store.subscribe(() => {
	saveState({favorites: store.getState().movie.favorites}, FAVORITE_KEY)
});

store.subscribe(()=> {
	saveState(store.getState().user.users, USER_KEY);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
