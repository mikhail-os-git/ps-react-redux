import styles from './Header.module.css';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import headerLogo from '/public/header/logo.svg';

export function Header({dataUsers, onClick}){
	return(
		<header className={styles['header']}>
			<img src={headerLogo} alt="Иконка шапки профиля" />

			<HeaderMenu dataUsers={dataUsers} onClick={onClick}/>
		</header>

	);
}