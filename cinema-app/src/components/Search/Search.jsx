import styles from'./Search.module.css';
import {Title} from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';
import {Button} from '../Button/Button';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';

export function Search({filterItemsFunc}){
	const formSearch = 'search';
	return(

		<section className={styles['search']}>

			<Title text="Поиск"/>
			<Paragraph fontSize = "16px" text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			<Form formType={formSearch} filterItemsFunc={filterItemsFunc}>
				<Input inputType={formSearch} text="Введите название"/>
				<Button text="Найти" onClick={()=> console.log('найти')}></Button>
			</Form>
		</section>
	);
}