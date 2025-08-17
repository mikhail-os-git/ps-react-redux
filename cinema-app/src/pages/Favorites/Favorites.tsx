import { useContext } from "react";
import { useMovie } from "../../context/MovieContext/movie.context"
import type { IMovieContext } from "../../context/MovieContext/movie.context.props";
import { CardList } from "../../components/CardList/CardList";
import { Title } from "../../components/Title/Title";
import styles from './Favorites.module.css';

export function Favorites() {
	// const {getFavorites, reset} = useContext(MovieContext) as IMovieContext;
	const {getFavorites} = useMovie();
	const favoriteItems = getFavorites();
	
	return(
		<section className={styles["favorites"]}>
			<Title text="Избранное"/>
			{favoriteItems?.length && <CardList items={favoriteItems}/>}
		</section>
	)
}