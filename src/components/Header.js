import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип проекта Место" />
            <a className="header__text" href="#">Выйти</a>
        </header>
    );
}

export default Header; 