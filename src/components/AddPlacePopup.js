import PopupWithForm from './PopupWithForm'
import React from 'react';
import { useState, useEffect } from 'react'

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [place, setPlace] = useState('');
    const [link, setLink] = useState('');

    function handleChangePlace(e) {
        setPlace(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: place,
            link: link,
        }).then(
            
        );
    }

    useEffect(() => {
        setPlace('');
        setLink('');
    }, [isOpen]);

    return (
        <PopupWithForm name={"new-card"} title={"Новое место"} buttonText={"Создать"} isOpen={isOpen} onClose={onClose} onSubmit={handleAddPlaceSubmit}>
            <label htmlFor="place-input" className="popup__label">
                <input id="place-input" name="name" className="popup__input popup__input_type_place" type="text"
                    placeholder="Название" value={place} minLength="2" maxLength="40" onChange={handleChangePlace} required />
                <span className="popup__input-error place-input-error">Текст ошибки</span>
            </label>

            <label htmlFor="link-input" className="popup__label">
                <input id="link-input" value={link} name="link" className="popup__input popup__input_type_link" type="url"
                    placeholder="Ссылка на картинку" onChange={handleChangeLink} required minLength="2" />
                <span className="popup__input-error link-input-error">Текст ошибки</span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup; 