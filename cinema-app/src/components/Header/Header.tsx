import styles from './Header.module.css';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import headerLogo from '/public/header/logo.svg';

export const Header: React.FC = () =>{
	return(
		<header className={styles['header']}>
			<img src={headerLogo} alt="Иконка шапки профиля" />

			<HeaderMenu/>
		</header>

	);
}