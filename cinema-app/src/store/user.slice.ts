import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../types/user";
import { loadState } from "./storage";
import { useNavigate } from "react-router-dom";


export const USER_KEY = 'users';

export interface IUserState {
	users: IUser[];
}


const initialState: IUserState = {
	users: loadState<IUser[]>(USER_KEY) ?? [],

}

export const userSlice = createSlice(
	{
		name: 'user',
		initialState,
		reducers: {
			login: (state, action: PayloadAction<string>) => {
				state.users.forEach(u => {
					if(u.username === action.payload) {
						u.isLogged = true;
						return true;
					}
				})
			},
			logout: (state) => {
				state.users.forEach(u => {u.isLogged = false});
			}
		}
	}
)

export const userActions = userSlice.actions;