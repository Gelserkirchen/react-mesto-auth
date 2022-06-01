import React from 'react';
import AuthForm from './AuthForm';
import Header from './Header'

function Login({ onSignIn, redirectToRegister }) {

    return (
        <>
            <Header title={'Регистрация'} handleClick={redirectToRegister}/>
            <AuthForm title={'Вход'} onSubmit={onSignIn} buttonTitle={'Войти'} />
        </>
    );
}

export default Login;