import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header({title, isAuth = false, email ='', userData, handleClick}) {
    

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Логотип проекта Место" />
            <div className="header__menu">
                {isAuth ? <p className="header__text" >{userData.email}</p> : ''}
                <button className="header__text-link" onClick={handleClick}>{title}</button>
            </div>
            
        </header>
    );
}

export default Header; 