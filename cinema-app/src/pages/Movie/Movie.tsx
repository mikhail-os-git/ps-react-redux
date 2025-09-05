import { Await, useLoaderData, useNavigation, useParams } from "react-router-dom"
import { useMovie } from "../../context/MovieContext/movie.context";
import type { IItem } from "../../types/item";
import styles from './Movie.module.css';
import { Paragraph } from "../../components/Paragraph/Paragraph";
import bookmarkIcon from '/public/cardlist/card-icons/bookmark.svg';
import likeIcon from '/public/cardlist/card-icons/like.svg';
import starIcon from '/public/cardlist/card-icons/star.svg';
import cn from 'classnames';
import { Button } from "../../components/Button/Button";
import type { IMovieDetails } from "../../types/movie.details";
import { Suspense } from "react";
import type { IMovie } from "../../types/movie";
import { useMovies } from "../../hooks/useMovies.hook";

export function Movie() {

	const data = useLoaderData() as IMovieDetails;
	const {movies, add, remove} = useMovies();
	const film = movies?.find(m => m.imdbId === data.imdbId);
	const addFavorite = () => {
		if(film != null) {
			add(film.id);
		}
	}

	const removeFavorite = () => {
		if(film != null) {
			remove(film.id);
		}
	}

	function parseDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return "0 Min";

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  const totalMinutes = hours * 60 + minutes + Math.floor(seconds / 60);

  return `${totalMinutes} Min`;
}

	const isFavorite: boolean = Boolean(film?.favorite);

	const favorite = (
		<Button onClick={isFavorite ? removeFavorite : addFavorite } className={styles['favorite']}>
			<img
				src={
					isFavorite
						? bookmarkIcon
						: likeIcon
				}
				alt={
					isFavorite
						? 'иконка в избранном'
						: 'иконка добавить в избранное'
				}
			/>
			<p className={
				cn(styles['favorite__text'], {
					[styles['isFavorite']]: isFavorite
				})}>
				{isFavorite ? 'В избранном' : 'В избранное'}
			</p>
		</Button>
	);

	let movie = data ? (
		<section className={styles["movie"]}>
			<div className={styles["head"]}>
				<p >Поиск фильмов</p>
				<h3 className={styles["name"]}>{data.short.name}</h3>
			</div>
			<div className={styles["body"]}>
				<img src={data.short.image} alt={"Картинка фильма " + data.short.name} />
				<div className={styles["right"]}>
					<Paragraph fontSize='20px' text = {data.short.description}/>
					<div className={styles['action']}>
						<div className={styles['rating']}>
							<img src={starIcon} alt="иконка рейтинга" />
							<p>{data.short.review.reviewRating.ratingValue}</p>
						</div>
						{favorite}
					</div>
					<div>
						<p className={styles["describe"]}>Тип</p>
						<p className={styles["text"]}>{data.short["@type"]}</p>
					</div>
					<div>
						<p className={styles["describe"]}>Дата выхода</p>
						<p className={styles["text"]}>{data.short.datePublished}</p>
					</div>

					<div>
						<p className={styles["describe"]}>Длительность</p>
						<p className={styles["text"]}>{parseDuration(data.short.duration)}</p>
					</div>

					<div>
						<p className={styles["describe"]}>Жанр</p>
						<p className={styles["text"]}>{data.short.genre.join(', ')}</p>
					</div>
				</div>
			</div>
			<div className={styles["foot"]}>
			<p className={styles["describe"]}>Отзывы</p>
			<div className={styles["reviews"]}>
				<div className={styles["reviews__info"]}>
					<h4 className={styles["reviews__title"]}>{data.short.review.name}</h4>
					<p className={styles["describe"]}>{data.short.review.dateCreated}</p>
				</div>
				<Paragraph fontSize="20px" text={data.short.review.reviewBody}/>
			</div>

			</div>

		</section>
	): '';
//#endregion

	return(
		
		<Suspense fallback={<span className={styles['loader']}></span>}>
			<Await
				resolve={data}
				errorElement={<div>Не можем отобразить продукт😬</div>}>
				{(data: IMovieDetails) =>
					(<div className={styles["head"]}>
						{movie}
					</div>)
				}

			</Await>
		</Suspense>
	)
}