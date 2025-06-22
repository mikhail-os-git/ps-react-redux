import { CardButton } from '../CardButton/CardButton';
import { CardItem } from '../CardItem/CardItem';
import './CardList.css';

export function CardList({items}) {
	
	let list = <p className='card-list__info'>Ничего не найдено</p>;

	if(items.length > 0){
		list = items.map(item => {
			return <CardButton key={item.id}>
				<CardItem item={item}/>
			</CardButton>;
		});
	}

	return(
		<section className="cards">
			<ul className='card-list'>
				{list}
			</ul>
		</section>
	);
}