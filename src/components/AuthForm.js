import React from 'react';
import { useState } from 'react';

function AuthForm({ title, onSubmit, buttonTitle, redirect = '' }) {
    const [formParams, setFormParams] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormParams((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formParams);
    }

    return (
        <section className="login">
            <h3 className="login__title">{title}</h3>
            <form className="login__inputs" onSubmit={handleSubmit}>
                <label htmlFor="email" className="login__label">
                    <input id="email" name="email" className="login__input login__input_type_email" type="email"
                        placeholder="Email" minLength="2" maxLength="40" value={formParams.email || ''} onChange={handleChange} required />
                    <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
                </label>

                <label htmlFor="password" className="login__label">
                    <input id="password" name="password" className="login__input login__input_type_password"
                        type="password" placeholder="Password" minLength="2" value={formParams.password || ''} onChange={handleChange} maxLength="200" required />
                    <span className="popup__input-error profession-input-error ">Текст ошибки</span>
                </label>
                <button className="login__submit-button" type="submit" >{buttonTitle}</button>
                {title === 'Регистрация' ?
                    <p className="login__bottom-message" >Уже зарегистрированы? <button className="login__bottom-link" onClick={redirect}> Войти</button></p> :
                    ''
                }
            </form>
        </section>
    );
}

export default AuthForm;      