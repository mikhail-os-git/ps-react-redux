import { useContext, useState } from 'react';
import styles from './MainPage.module.css';
import { Search } from '../../components/Search/Search';
import { CardList } from '../../components/CardList/CardList';

import type { IItem } from '../../types/item';
import { MovieContext, MovieContextProvider } from '../../context/MovieContext/movie.context';
import type { IMovieContext } from '../../context/MovieContext/movie.context.props';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';







export function MainPage() {

	const {loading, movies} = useSelector((s: RootState) => s.movie);

	return (
		<>
			<section className={styles["main"]}>
				<Search/>
				<CardList items={movies} loading={loading}/>
			</section>
		</>
	);
}

