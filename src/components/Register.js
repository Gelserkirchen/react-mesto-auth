import React from 'react';
import AuthForm from './AuthForm';
import Header from './Header'

function Register({ onSignUp, redirectToLogin }) {

    function handleSubmit(formParams) {
        let { email, password } = formParams;
        onSignUp({ email, password })
    }

    return (
        <>
            <Header title={'Войти'} handleClick={redirectToLogin} />
            <AuthForm title={'Регистрация'} onSubmit={handleSubmit} redirect={redirectToLogin} buttonTitle={'Зарегистрироваться'} />
        </>
    );
}

export default Register; 