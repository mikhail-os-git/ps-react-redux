import styles from './CardItem.module.css';
import bookmarkIcon from '/public/cardlist/card-icons/bookmark.svg';
import likeIcon from '/public/cardlist/card-icons/like.svg';
import starIcon from '/public/cardlist/card-icons/star.svg';
import cn from 'classnames';
import type { CardItemProps } from './CardItem.props';
import { Button } from '../Button/Button';

export function CardItem({item}: CardItemProps){

	const isFavorite = Boolean(item?.favorite);
	const favorite = (
		<Button className={cn(styles['card-item__favorite'],styles['favorite'])}>
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
			<p className={
				cn(styles['favorite__text'], {
					[styles['isFavorite']]: isFavorite
				})}>
				{isFavorite ? 'В избранном' : 'В избранное'}
			</p>
		</Button>
	);

	return (
		<li className={cn(styles['card-list__item'], styles['card-item'])}>
			<img src={item['#IMG_POSTER']} alt={'картинка фильма' + item['#TITLE']} />

			<div className={styles['card-item__rating']}>
				<img src={starIcon} alt="иконка рейтинга" />
				<p>{item['#RANK']}</p>
			</div>

			<div className={styles['card-item__info']}>
				<h3 className={styles['card-item__name']}>{item['#TITLE']}</h3>

				{favorite}
			</div>
		</li>
	);
}