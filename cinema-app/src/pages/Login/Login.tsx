import styles from'./Login.module.css';
import styleForm from '../../components/Form/Form.module.css';
import cn from 'classnames';
import { type RefObject, useContext, useRef } from 'react';
import { useFormSubmit } from '../../hooks/useFormSubmit.hook';
import { validateForm } from '../../components/Form/validationForm';
import { Title } from '../../components/Title/Title';
import { Form } from '../../components/Form/Form';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import { UserContext } from '../../context/UserContext/user.context';

export const Login: React.FC = () =>{
	const inputRef = useRef<HTMLInputElement>(null);
	const formLogin = 'login';

	const context = useContext(UserContext);

	const filter = context!.filter;

	const { stateValidity, handleSubmit } = useFormSubmit({
		onValidate: validateForm,
		onSuccess: (data) => filter(data),
		inputRef:inputRef as RefObject<HTMLInputElement>
	});

	return(

		<section className={styles['login']}>

			<Title text="Вход"/>
			
			<Form onSubmit={handleSubmit}  className={cn(styleForm['form'], styleForm['form_login'])}>

				<Input ref={inputRef} type="text" isValid={stateValidity} inputType={formLogin} text="Ваше имя"/>
				<Button>Войти в профиль</Button>
			
			</Form>
		</section>
	);
}