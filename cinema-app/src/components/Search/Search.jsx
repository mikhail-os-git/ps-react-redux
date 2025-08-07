import styles from'./Search.module.css';
import styleForm from '../Form/Form.module.css';
import cn from 'classnames';
import { useRef } from 'react';
import { useFormSubmit } from '../../hooks/useFormSubmit.hook';
import { validateForm } from '../Form/validationForm';
import {Title} from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';
import { Form } from '../Form/Form';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';


export function Search({actionFunc}){
	const inputRef = useRef();
	const formSearch = 'search';

	const { formValidity, handleSubmit } = useFormSubmit({
		onValidate: validateForm,
		onSuccess: (data) => actionFunc(data),
		inputRef
	});

	return(

		<section className={styles['search']}>

			<Title text="Поиск"/>
			<Paragraph fontSize = "16px" text = "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."/>
			
			<Form onSubmit={handleSubmit}  className={cn(styleForm['form'], styleForm['form_search'])}>

				<Input ref={inputRef} type="text" isValid={formValidity} inputType={formSearch} text="Введите название"/>
				<Button text="Искать"/>
			
			</Form>
		</section>
	);
}