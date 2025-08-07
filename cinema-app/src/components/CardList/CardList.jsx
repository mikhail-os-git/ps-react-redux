import { CardButton } from '../CardButton/CardButton';
import { CardItem } from '../CardItem/CardItem';
import styles from './CardList.module.css';

export function CardList({items}) {
	
	let list = <p className={styles['card-list__info']}>Ничего не найдено</p>;

	if(items.length > 0){
		list = items.map(item => {
			return <CardButton key={item.id}>
				<CardItem item={item}/>
			</CardButton>;
		});
	}

	return(
		<section className={styles['cards']}>
			<ul className={styles['card-list']}>
				{list}
			</ul>
		</section>
	);
}