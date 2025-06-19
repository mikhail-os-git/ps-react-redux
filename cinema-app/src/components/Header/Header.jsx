import './Header.css';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export function Header(){
	return(
		<header className='header'>
			<img src="../../../public/header/logo.svg" alt="" />

			<HeaderMenu/>
		</header>

	);
}