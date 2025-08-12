import type { JSX } from 'react';
import styles from './CardList.module.css';
import { CardButton } from '../CardButton/CardButton';
import { CardItem } from '../CardItem/CardItem';
import { Title } from '../Title/Title';
import type { CardListProps } from './CardList.props';
import { Paragraph } from '../Paragraph/Paragraph';



export function CardList({items}: CardListProps) {
	
	// let list: JSX.Element | JSX.Element[] = <p className={styles['card-list__info']}>Ничего не найдено</p>;

	let list: JSX.Element | JSX.Element[] = <div className={styles['card-list__info']}>

		<Title text="Упс... Ничего не найдено"/>
		<Paragraph text='Попробуйте изменить запрос или ввести более точное название фильма'/>

	</div>;

	if(items && items.length){
		
		list = (
			<ul className={styles['card-list']}>
				{items.map(item => (
					<CardButton to={`/movie/${item.id}`} key={item.id}>
						<CardItem item={item} />
					</CardButton>
				))}
			</ul>
		);
	}

	return(
		<section className={styles['cards']}>
				{list}
		</section>
	);
}