import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMovie } from "../types/movie";
import axios, { AxiosError } from "axios";
import { SEARCH_PREFIX } from "../helpers/API";
import { loadState, saveState } from "./storage";
import type { RootState } from "./store";
import { useState } from "react";
import { Favorites } from "../pages/Favorites/Favorites";

export interface IMovieState {
	movies: IMovie[] | null,
	favorites: IMovie[],
	loading: boolean,
	error?:  string,
}

export const FAVORITE_KEY = 'favorites';

interface IResponseDescription{
	"#TITLE": string
	"#YEAR": number
	"#IMDB_ID": string
	"#RANK": number
	"#ACTORS": string
	"#AKA": string
	"#IMDB_URL": string
	"#IMDB_IV": string
	"#IMG_POSTER": string
	photo_width: number
	photo_height: number
}

export interface ApiResponse {
	ok: boolean, 
	description:IResponseDescription[], 
	error_code: number
}

const initialState: IMovieState = {
	movies: null,
	favorites: loadState<{favorites: IMovie[]}>(FAVORITE_KEY)?.favorites ?? [],
	loading: false,
}


function normalizeKey(key: string): string {
  return key
    .replace(/^#/, "")
    .toLowerCase()
    .split("_")
    .map((part, i) =>
      i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");
}

const mapItems = (data: IResponseDescription[]): IMovie[] => {
		if(!data.length) {
			return []
		}

		const movieData: IMovie[] = data.map((movie, index) => {
			const normalize: IMovie = {id: index + 1, favorite: false} as IMovie;

			for(const key in movie) {
				if(key in movie) {
					const k: string = normalizeKey(key);
					normalize[k] = movie[key as keyof IResponseDescription]	
				}
			}

			return normalize;
		});
		return movieData
}	

export const search = createAsyncThunk('movie/search',
	async(params:{name: string}) => {
		
		try{
			const { data } = await axios.get<ApiResponse>(
			SEARCH_PREFIX + params.name
			);
			return data;
		} catch (error) {
			if(error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	}
)

export const movieSlice = createSlice({
	name: 'movie',
	initialState, 
	reducers: {
		addFavorit:(state, action: PayloadAction<number>) => {
			if(state.favorites.some(m => m.id === action.payload)) {
				return;
			}
			if(state.movies != null) {
				state.movies.forEach(m => {
					if(m.id === action.payload) {
						m.favorite = true;
						state.favorites.push(m);
					}
				})
				
			}
			
		},
		removeFavorit:(state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(fav => fav.id != action.payload);
			if(state.movies != null) {
				state.movies.forEach(m => {
					if(m.id === action.payload){
						m.favorite = false
					}
				})
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(search.fulfilled, (state,action) => {
			state.loading = false;
			if(!action.payload) {
				return;
			}
			state.movies = mapItems(action.payload.description);

			state.error = undefined;
		})

		builder.addCase(search.pending, (state) => {
			state.loading = true;
			state.error = undefined
		})
		builder.addCase(search.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message;
		})
	}
})


export const movieActions = movieSlice.actions;