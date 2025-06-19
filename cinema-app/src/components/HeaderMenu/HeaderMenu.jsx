import './HeaderMenu.css';

export function HeaderMenu(){
	return(
		<nav className='header-menu'>
			<ul className='header-menu__list'>
				<li className='header-menu__item menu-item'>
					<a href="#" className="menu-item__link">Поиск фильмов</a>
				</li>
				<li className='header-menu__item menu-item'>
					<a href="#" className="menu-item__link">Мои фильмы

						<div className='menu-item__count'>2</div>

					</a>
				</li>
				<li className='header-menu__item menu-item'>
					<a href="#" className="menu-item__link">
						Войти
						<img className='menu-item__img' src="../../../public/header/menu-icon-logout.svg" alt="Иконка выхода" />
					</a>
				</li>
			</ul>
		</nav>
	);

}