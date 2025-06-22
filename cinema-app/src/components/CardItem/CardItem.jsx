import './CardItem.css';

export function CardItem({item}){

	// let favorite = <div className='card-item__favorite favorite'>
	// 	<img className = "favorite__icon" src="../../../public/cardlist/card-icons/like.svg" alt="иконка добавить в избранное" />
	// 	<p className='favorite__text'>В избранное</p>
	// </div>;

	// if(item.favorite){
	// 	<div className='card-item__favorite favorite'>
	// 		<img className = "favorite__icon" src="../../../public/cardlist/card-icons/bookmark.svg" alt="иконка в избранном" />
	// 		<p className='favorite__text isFavorite'>В избранном</p>
	// 	</div>;
	// }
	const isFavorite = item.favorite;
	const favorite = (
		<div className="card-item__favorite favorite">
			<img
				className="favorite__icon"
				src={
					isFavorite
						? '../../../public/cardlist/card-icons/bookmark.svg'
						: '../../../public/cardlist/card-icons/like.svg'
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
				<img src="../../../public/cardlist/card-icons/star.svg" alt="иконка рейтинга" />
				<p>{item.rating}</p>
			</div>

			<div className='card-item__info'>
				<h3 className='card-item__name'>{item.name}</h3>

				{favorite}
			</div>
		</li>
	);
}