import styles from './HeaderMenu.module.css';
import cn from 'classnames';

import userIcon from '../../../public/header/user-icon.svg';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext/user.context';
import type { IUser } from '../../types/user';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export const HeaderMenu: React.FC = () =>{

	const context = useContext(UserContext);

	const user = context?.user;
	const logout = context?.logout;

	const count = useSelector((s: RootState) => s.movie.favorites.length);

	let userItem;
	let button = <NavLink to='/login' className={({isActive}) => cn(styles['menu-item__link'], 
		{
			[styles['active']]: isActive
		}
	)}>
	Войти
		<img className={styles['menu-item__img']} src="../../../public/header/menu-icon-logout.svg" alt="Иконка Входа" />
	</NavLink>;
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
					<NavLink to='/' className={({isActive})=> cn(styles['menu-item__link'], 
						{[styles['active']]: isActive}
					)}>Поиск фильмов</NavLink>
				</li>
				<li className={cn(styles['header-menu__item'],styles['menu-item'])}>
					<NavLink to='/favorites' className={({isActive})=> cn(styles['favorite_link'],styles['menu-item__link'], 
						{[styles['active']]: isActive}
					)}>Мои фильмы

						<div className={styles['menu-item__count']}>{count}</div>

					</NavLink>
				</li>
				
				{userItem}
				<li className={cn(styles['header-menu__item'],styles['menu-item'])}>
					{button}
				</li>
			</ul>
		</nav>
	);

}