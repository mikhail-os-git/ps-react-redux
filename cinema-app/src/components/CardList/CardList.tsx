import type { JSX } from 'react';
import styles from './CardList.module.css';
import { CardButton } from '../CardButton/CardButton';
import { CardItem } from '../CardItem/CardItem';
import { Title } from '../Title/Title';
import type { CardListProps } from './CardList.props';
import { Paragraph } from '../Paragraph/Paragraph';


export function CardList({items, loading = false}: CardListProps) {
	if(!items && !loading) {
		return;
	}

	if(loading) {
		return (
		<section className={styles.cards}>
				<span className={styles['loader']}></span>
		</section>
	)
	}

	if(items != null && !items.length){
	return (
    	<section className={styles.cards}>
        <div>
				<Title text="Упс... Ничего не найдено"/>
				<Paragraph text='Попробуйте изменить запрос или ввести более точное название фильма'/>
            </div>
    	</section>
    )
}

return (
        <section className={styles.cards}>
			<ul className={styles['card-list']}>
				{items != null && items.map(item => (
					<CardButton to={`/movie/${item.imdbId}`} key={item.id}>
						<CardItem item={item} />
					</CardButton>
				))}
			</ul>
    	</section>
)
}