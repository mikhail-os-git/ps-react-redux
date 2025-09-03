import { CardList } from "../../components/CardList/CardList";
import { Title } from "../../components/Title/Title";
import styles from './Favorites.module.css';
import { useMovies } from "../../hooks/useMovies.hook";

export function Favorites() {
	const {favorites} = useMovies();
	return(
		<section className={styles["favorites"]}>
			<Title text="Избранное"/>
			{ favorites!= null && <CardList items={favorites}/>}
		</section>
	)
}