import { useContext } from "react";
import { useMovie } from "../../context/MovieContext/movie.context"
import type { IMovieContext } from "../../context/MovieContext/movie.context.props";
import { CardList } from "../../components/CardList/CardList";
import { Title } from "../../components/Title/Title";
import styles from './Favorites.module.css';
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

export function Favorites() {
	const favorites = useSelector((s: RootState) => s.movie.favorites);
	return(
		<section className={styles["favorites"]}>
			<Title text="Избранное"/>
			{ favorites!= null && <CardList items={favorites}/>}
		</section>
	)
}