import {createContext, useEffect, useState

} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';


export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {

	const [users, saveUsers] = useLocalStorage('data');
	const [user, setUser] = useState({});


	const filterUsers = (userName) => {
		const updated = users.map(user => {
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

	const userLogout = () => {
		const logout = users.map(user => ({
			...user,
			isLogged: false
		}));
		saveUsers(logout);
	};

	useEffect(() => {
		if (Array.isArray(users)) {
			const user = users.find(user => user.isLogged === true);
			if (user) {
				setUser(user);
			} else {
				setUser({}); // если никто не залогинен
			}
		}
	}, [users]);

	return <UserContext.Provider value = {{user, filter: filterUsers, logout: userLogout }}> {children}</UserContext.Provider>;
};


