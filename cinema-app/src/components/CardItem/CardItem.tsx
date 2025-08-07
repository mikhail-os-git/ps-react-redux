import styles from './CardItem.module.css';
import bookmarkIcon from '/public/cardlist/card-icons/bookmark.svg';
import likeIcon from '/public/cardlist/card-icons/like.svg';
import starIcon from '/public/cardlist/card-icons/star.svg';
import cn from 'classnames';
import type { CardItemProps } from './CardItem.props';

export function CardItem({item}: CardItemProps){

	const isFavorite = item.favorite;
	const favorite = (
		<div className={cn(styles['card-item__favorite'],styles['favorite'])}>
			<img
				className={styles['favorite__icon']}
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
			<a className={
				cn(styles['favorite__text'], {
					[styles['isFavorite']]: isFavorite
				})}>
				{isFavorite ? 'В избранном' : 'В избранное'}
			</a>
		</div>
	);

	return (
		<li className={cn(styles['card-list__item'], styles['card-item'])}>
			<img src={item.image} alt={'картинка фильма' + item.name} />

			<div className={styles['card-item__rating']}>
				<img src={starIcon} alt="иконка рейтинга" />
				<p>{item.rating}</p>
			</div>

			<div className={styles['card-item__info']}>
				<h3 className={styles['card-item__name']}>{item.name}</h3>

				{favorite}
			</div>
		</li>
	);
}