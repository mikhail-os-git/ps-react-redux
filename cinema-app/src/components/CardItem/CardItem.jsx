import './CardItem.css';
import bookmarkIcon from '/public/cardlist/card-icons/bookmark.svg';
import likeIcon from '/public/cardlist/card-icons/like.svg';
import starIcon from '/public/cardlist/card-icons/star.svg';

export function CardItem({item}){

	const isFavorite = item.favorite;
	const favorite = (
		<div className="card-item__favorite favorite">
			<img
				className="favorite__icon"
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
			<a className={`favorite__text ${isFavorite ? 'isFavorite' : ''}`}>
				{isFavorite ? 'В избранном' : 'В избранное'}
			</a>
		</div>
	);

	return (
		<li className='card-list__item card-item'>
			<img src={item.image} alt={'картинка фильма' + item.name} />

			<div className='card-item__rating'>
				<img src={starIcon} alt="иконка рейтинга" />
				<p>{item.rating}</p>
			</div>

			<div className='card-item__info'>
				<h3 className='card-item__name'>{item.name}</h3>

				{favorite}
			</div>
		</li>
	);
}