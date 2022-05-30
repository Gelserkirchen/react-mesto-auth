import React from 'react';
import { useState } from 'react';

function AuthForm({title, onSubmit, buttonTitle}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            email,
            password
        });
    }

    return (
        <section className="login">
        <h3 className="login__title">{title}</h3>
        <form className="login__inputs" onSubmit={handleSubmit}>
            <label htmlFor="email" className="login__label">
                <input id="email" name="email" className="popup__input popup__input_type_name" type="email"
                    placeholder="Email" minLength="2" maxLength="40" value={email || ''} onChange={handleChangeEmail} required />
                <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
            </label>

            <label htmlFor="profession-input" className="login__label">
                <input id="password" name="password" className="popup__input popup__input_type_profile"
                    type="password" placeholder="Password" minLength="2" value={password || ''} onChange={handleChangePassword} maxLength="200" required />
                <span className="popup__input-error profession-input-error ">Текст ошибки</span>
            </label>
            <button className="login__submit-button" type="submit" >{buttonTitle}</button>
        </form>
    </section>
    );
}

export default AuthForm;      