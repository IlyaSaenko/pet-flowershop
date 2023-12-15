import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
	return (
		<header className='header'>
			<HashLink smooth to="#catalog" className="header__button">Каталог</HashLink>
			<HashLink smooth to="#delivery" className="header__button">Доставка</HashLink>
			<HashLink smooth to="#footer" className="header__button">Контакты</HashLink>
			<button className='header__login enter'><span>Войти</span></button>
		</header>
	);
}

export default Header;