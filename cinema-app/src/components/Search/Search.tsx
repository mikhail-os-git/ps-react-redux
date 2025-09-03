import styles from'./Search.module.css';
import styleForm from '../Form/Form.module.css';
import cn from 'classnames';
import { useContext, useRef, type RefObject } from 'react';
import { useFormSubmit } from '../../hooks/useFormSubmit.hook';
import { validateForm } from '../Form/validationForm';
import {Title} from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';
import { Form } from '../Form/Form';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import { useMovie } from '../../context/MovieContext/movie.context';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { search } from '../../store/movie.slice';
import { useMovies } from '../../hooks/useMovies.hook';

export function Search(){
	const {doSearch} = useMovies();
	//#region old with use custom validation
	const formSearch = 'search';
	// const { stateValidity, handleSubmit } = useFormSubmit({
	// 	onValidate: validateForm,
	// 	onSuccess: (data) => data? filterItems?.(data) : ()=>{},
	// 	inputRef:inputRef as RefObject<HTMLInputElement>
	// });
	//#endregion

	const { handleSubmit } = useFormSubmit({
		onSuccess: (data) => doSearch(data)
	});

	return(

		<section className={styles['search']}>

			<Title text="Поиск"/>
			<Paragraph fontSize = "16px" text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			
			<Form onSubmit={handleSubmit}  className={cn(styleForm['form'], styleForm['form_search'])}>

				<Input type="text" inputType={formSearch} text="Введите название"/>
				
				<Button>Искать</Button>
			
			</Form>
		</section>
	);
}