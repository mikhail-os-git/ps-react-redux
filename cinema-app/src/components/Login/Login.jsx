import { Title } from '../Title/Title';
import {Form} from '../Form/Form';
import styles from './Login.module.css';

export function Login({actionFunc}) {

	const formLogin = 'login';

	return (
		
		<section className={styles['login']}>
			<Title text={'Вход'}/>

			<Form formType={formLogin} actionFunc={actionFunc} inputText={'Ваше имя'} buttonText={'Войти в профиль'}/>
		</section>
	);
}