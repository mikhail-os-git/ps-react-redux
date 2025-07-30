import styles from'./Login.module.css';
import styleForm from '../Form/Form.module.css';
import cn from 'classnames';
import { useContext, useRef } from 'react';
import { useFormSubmit } from '../../hooks/useFormSubmit.hook';
import { validateForm } from '../Form/validationForm';
import {Title} from '../Title/Title';
import { Form } from '../Form/Form';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import { UserContext } from '../../context/user.context';

export function Login(){
	const inputRef = useRef();
	const formLogin = 'login';

	const {filter} = useContext(UserContext);

	const { formValidity, handleSubmit } = useFormSubmit({
		onValidate: validateForm,
		onSuccess: (data) => filter(data),
		inputRef
	});

	return(

		<section className={styles['login']}>

			<Title text="Вход"/>
			
			<Form onSubmit={handleSubmit}  className={cn(styleForm['form'], styleForm['form_login'])}>

				<Input ref={inputRef} type="text" isValid={formValidity} inputType={formLogin} text="Ваше имя"/>
				<Button text="Войти в профиль"/>
			
			</Form>
		</section>
	);
}