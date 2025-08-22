import { useContext } from "react";
import { useMovie } from "../../context/MovieContext/movie.context"
import type { IMovieContext } from "../../context/MovieContext/movie.context.props";
import { CardList } from "../../components/CardList/CardList";
import { Title } from "../../components/Title/Title";
import styles from './Favorites.module.css';

export function Favorites() {
	const {items} = useMovie();

	const favoriteItems = items?.filter(i => i?.favorite === true);
	
	return(
		<section className={styles["favorites"]}>
			<Title text="Избранное"/>
			{ favoriteItems != null && <CardList items={favoriteItems}/>}
		</section>
	)
}