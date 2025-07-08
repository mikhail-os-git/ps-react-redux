import styles from'./Search.module.css';
import {Title} from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';

import { Form } from '../Form/Form';

export function Search({actionFunc}){
	const formSearch = 'search';
	return(

		<section className={styles['search']}>

			<Title text="Поиск"/>
			<Paragraph fontSize = "16px" text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			
			<Form formType={formSearch} actionFunc={actionFunc} inputText={'Введите название'} buttonText={'Найти'}/>
		</section>
	);
}