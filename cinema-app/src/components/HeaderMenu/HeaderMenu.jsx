import styles from './HeaderMenu.module.css';
import cn from 'classnames';

export function HeaderMenu(){
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
				<li className={cn(styles['header-menu__item'],styles['menu-item'])}>
					<a href="#" className={styles['menu-item__link']}>
						Войти
						<img className={styles['menu-item__img']} src="../../../public/header/menu-icon-logout.svg" alt="Иконка выхода" />
					</a>
				</li>
			</ul>
		</nav>
	);

}