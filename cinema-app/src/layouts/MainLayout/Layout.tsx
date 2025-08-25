import { useState } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { UserContextProvider } from '../../context/UserContext/user.context';
import { MovieContextProvider } from '../../context/MovieContext/movie.context';

export function Layout() {
	return (
	<div className={styles["layout"]}>
		<UserContextProvider>
				<Header/>
				<div className={styles["content"]}>
						<Outlet/>
				</div>
			</UserContextProvider>
	</div>
)
}