import styles from './MainPage.module.css';
import { Search } from '../../components/Search/Search';
import { CardList } from '../../components/CardList/CardList';
import { useMovies } from '../../hooks/useMovies.hook';







export function MainPage() {
	const {movies, loading} = useMovies()

	return (
		<>
			<section className={styles["main"]}>
				<Search/>
				<CardList items={movies} loading={loading}/>
			</section>
		</>
	);
}

