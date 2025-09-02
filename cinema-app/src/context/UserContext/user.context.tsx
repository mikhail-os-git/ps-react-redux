import {createContext, useEffect, useState} from 'react';
import type { IUser } from '../../types/user';
import { useLocalStorage } from '../../hooks/useLocalStorage.hook';
import type { IUserContext, IUserContextProps } from './user.context.props';
import { useNavigate } from 'react-router-dom';


export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({children} : IUserContextProps) => {

	const [users, saveUsers] = useLocalStorage<IUser[]>('data', []);
	const [user, setUser] = useState<IUser | null>(null);
	const navigate = useNavigate()

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
		navigate('/');
	};

	const userLogout = ():void => {
		const logout = users.map((user: IUser)  => ({
			...user,
			isLogged: false
		}));
		saveUsers(logout);
		navigate('/login');
	};

	useEffect(() => {
		if (Array.isArray(users)) {
			if(users.find((user: IUser) => user.isLogged === true)) {
				const user: IUser = users.find((user: IUser) => user.isLogged === true) as IUser;
				setUser(user);
			} else {
				setUser(null); // если никто не залогинен
			}
		}
	}, [users]);

	return <UserContext.Provider value = {{user, filter: filterUsers, logout: userLogout }}> {children}</UserContext.Provider>;
};


