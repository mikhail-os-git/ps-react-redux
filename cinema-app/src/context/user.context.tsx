import {createContext, useEffect, useState} from 'react';
import type { IUser } from '../types/user';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import type { IUserContext, IUserContextProps } from './user.context.props';


export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({children} : IUserContextProps) => {

	const [users, saveUsers] = useLocalStorage('data');
	const [user, setUser] = useState<IUser | null>(null);


	const filterUsers = (userName: string): void => {
		const updated: IUser[] = users.map((user: IUser) => {
			if(user.username.toLowerCase() === userName.toLowerCase()) {
				const loggedUser  = { ...user, isLogged: true };
				setUser(loggedUser);
				return loggedUser;
			} 
			return user;
		}
		);

		saveUsers(updated);
	};

	const userLogout = ():void => {
		const logout = users.map((user: IUser)  => ({
			...user,
			isLogged: false
		}));
		saveUsers(logout);
	};

	useEffect(() => {
		if (Array.isArray(users)) {
			const user: IUser = users.find((user: IUser) => user.isLogged === true);
			if (user) {
				setUser(user);
			} else {
				setUser(null); // если никто не залогинен
			}
		}
	}, [users]);

	return <UserContext.Provider value = {{user, filter: filterUsers, logout: userLogout }}> {children}</UserContext.Provider>;
};


