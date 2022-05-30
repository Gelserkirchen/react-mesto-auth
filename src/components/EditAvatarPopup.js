import PopupWithForm from './PopupWithForm'
import React from 'react';
import { createRef, useEffect } from 'react'

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = createRef('');

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    useEffect(() => {
        avatarRef.current.value = ''
    }, [isOpen]);

    return (
        <PopupWithForm name={"update-avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label htmlFor="link-input" className="popup__label">
                <input id="update-avatar-link" defaultValue={ avatarRef.current } ref={avatarRef} name="link" className="popup__input popup__input_type_link"
                    type="url" placeholder="Ссылка на аватар" required minLength="2" />
                <span className="popup__input-error update-avatar-link-error">Текст ошибки</span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;