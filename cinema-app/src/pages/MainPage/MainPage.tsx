import { useContext, useState } from 'react';
import styles from './MainPage.module.css';
import { Search } from '../../components/Search/Search';
import { CardList } from '../../components/CardList/CardList';

import type { IItem } from '../../types/item';
import { MovieContext, MovieContextProvider } from '../../context/MovieContext/movie.context';
import type { IMovieContext } from '../../context/MovieContext/movie.context.props';







export function MainPage() {

	const {loading, items} = useContext(MovieContext) as IMovieContext;
	return (
		<>
			<section className={styles["main"]}>
				<Search/>
				<CardList items={items} loading={loading}/>
			</section>
		</>
	);
}

