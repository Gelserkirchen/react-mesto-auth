import React from 'react';

import AuthForm from './AuthForm';

function Register({onSignUp}) {
    return (
        <AuthForm title={'Регистрация'} onSubmit={onSignUp} buttonTitle={'Зарегистрироваться'}/>
    );
}

export default Register; 