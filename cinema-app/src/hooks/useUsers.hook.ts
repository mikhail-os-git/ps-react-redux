import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import type { IUser } from "../types/user";
import { userActions } from "../store/user.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useUsers() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();


	const users: IUser[] = useSelector((s: RootState) => s.user.users);
	const allow: boolean = users.some(u => u.isLogged);
	const logout = () => dispatch(userActions.logout());
	const login = (username: string) => dispatch(userActions.login(username));
	const username: string | undefined = users.find(u => u.isLogged)?.username;

useEffect(() => {
	if (allow) {
		navigate('/');
	} else {
		navigate('/login');
	}
}, [allow, navigate]);

	return {users, allow, logout, login, username}
}