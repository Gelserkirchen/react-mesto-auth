import React from 'react';
import AuthForm from './AuthForm';

function Login({ onSignIn }) {

    return (
        <AuthForm title={'Вход'} onSubmit={onSignIn} buttonTitle={'Войти'} />
    );
}

export default Login;