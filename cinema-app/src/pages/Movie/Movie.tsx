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

export function Movie() {

	const data = useLoaderData() as IMovieDetails;
	const navigation = useNavigation();

	//#region  Страница сделана, нужно только подставить потом значения!
	// const isFavorite: boolean = Boolean(data?.favorite);

	// const favorite = (
	// 	<Button className={styles['favorite']}>
	// 		<img
	// 			src={
	// 				isFavorite
	// 					? bookmarkIcon
	// 					: likeIcon
	// 			}
	// 			alt={
	// 				isFavorite
	// 					? 'иконка в избранном'
	// 					: 'иконка добавить в избранное'
	// 			}
	// 		/>
	// 		<p className={
	// 			cn(styles['favorite__text'], {
	// 				[styles['isFavorite']]: isFavorite
	// 			})}>
	// 			{isFavorite ? 'В избранном' : 'В избранное'}
	// 		</p>
	// 	</Button>
	// );

	// let movie = item ? (
	// 	<section className={styles["movie"]}>
	// 		<div className={styles["head"]}>
	// 			<p >Поиск фильмов</p>
	// 			<h3 className={styles["name"]}>{item.name}</h3>
	// 		</div>
	// 		<div className={styles["body"]}>
	// 			<img src={item.image} alt={"Картинка фильма " + item.name} />
	// 			<div className={styles["right"]}>
	// 				<Paragraph fontSize='20px' text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur perferendis voluptatem culpa? Distinctio quod iure voluptate quaerat quas cum? Voluptatem deleniti facere veniam itaque dolorum architecto, quaerat vitae ad distinctio?'/>
	// 				<div className={styles['action']}>
	// 					<div className={styles['rating']}>
	// 						<img src={starIcon} alt="иконка рейтинга" />
	// 						<p>{item.rating}</p>
	// 					</div>
	// 					{favorite}
	// 				</div>
	// 				<div>
	// 					<p className={styles["describe"]}>Тип</p>
	// 					<p className={styles["text"]}>Movie</p>
	// 				</div>
	// 				<div>
	// 					<p className={styles["describe"]}>Дата выхода</p>
	// 					<p className={styles["text"]}>2019-04-24</p>
	// 				</div>

	// 				<div>
	// 					<p className={styles["describe"]}>Длительность</p>
	// 					<p className={styles["text"]}>181 мин</p>
	// 				</div>

	// 				<div>
	// 					<p className={styles["describe"]}>Жанр</p>
	// 					<p className={styles["text"]}>Adventure,  Science Fiction, Action</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div className={styles["foot"]}>
	// 		<p className={styles["describe"]}>Отзывы</p>
	// 		<div className={styles["reviews"]}>
	// 			<div className={styles["reviews__info"]}>
	// 				<h4 className={styles["reviews__title"]}>Not as good as infinity war..</h4>
	// 				<p className={styles["describe"]}>2019-04-29</p>
	// 			</div>
	// 			<Paragraph fontSize="20px" text="But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship..."/>
	// 		</div>

	// 		</div>

	// 	</section>
	// ): '';
//#endregion

	return(
		
		<Suspense fallback={<span className={styles['loader']}></span>}>
			<Await
				resolve={data}
				errorElement={<div>Не можем отобразить продукт😬</div>}>
				{(data: IMovieDetails) =>
					(<div className={styles["head"]}>
						<p >Поиск фильмов</p>
						<h3 className={styles["name"]}>{data.short.name}</h3>
					</div>)
				}

			</Await>
		</Suspense>
	)
}