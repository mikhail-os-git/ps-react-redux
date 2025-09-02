import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import type { IUser } from '../types/user';

export const RequireAuth = ({children}: {children: ReactNode}) => {
	
	const data = JSON.parse(localStorage.getItem('data') as string);
	const allow = (data as IUser[]).some(p => p.isLogged === true);
	if(!allow) {
		return <Navigate to="/login" replace/>;
	}
	return children;
};