import styles from './HeaderMenu.module.css';
import cn from 'classnames';

import userIcon from '../../../public/header/user-icon.svg';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export function HeaderMenu(){

	const {user, logout} = useContext(UserContext);
	let userItem;
	let button = <a href="#" className={styles['menu-item__link']}>
	Войти
		<img className={styles['menu-item__img']} src="../../../public/header/menu-icon-logout.svg" alt="Иконка Входа" />
	</a>;
	if(user){
		button = <a onClick={logout} href="#" className={styles['menu-item__link']}>
		Выйти
		</a>;

		userItem = <li className={cn(styles['header-menu__item'],styles['menu-item'])}>
			<a href="#" className={styles['menu-item__link']}>{user?.username}
				<img src={userIcon} alt="иконка пользователя" />
			</a>
		</li>;
		
	}



	return(
		<nav className={styles['header-menu']}>
			<ul className={styles['header-menu__list']}>
				<li className={ cn(styles['header-menu__item'],styles['menu-item'])}>
					<a href="#" className={styles['menu-item__link']}>Поиск фильмов</a>
				</li>
				<li className={cn(styles['header-menu__item'],styles['menu-item'])}>
					<a href="#" className={styles['menu-item__link']}>Мои фильмы

						<div className={styles['menu-item__count']}>2</div>

					</a>
				</li>
				
				{userItem}
				<li className={cn(styles['header-menu__item'],styles['menu-item'])}>
					{button}
				</li>
			</ul>
		</nav>
	);

}