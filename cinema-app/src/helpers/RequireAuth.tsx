import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import type { IUser } from '../types/user';
import { useUsers } from '../hooks/useUsers.hook';

export const RequireAuth = ({children}: {children: ReactNode}) => {

	const {allow} = useUsers();
	if(!allow) {
		return <Navigate to="/login" replace/>;
	}
	return children;
};