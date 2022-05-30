import PopupWithForm from './PopupWithForm'
import { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeProfession(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <>
            <PopupWithForm name={"profile"} title={"Редактировать профиль"} buttonText={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
                <label htmlFor="name-input" className="popup__label">
                    <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text"
                        placeholder="Имя" minLength="2" maxLength="40" value={name || ''} onChange={handleChangeName} required />
                    <span id="error-of-input" className="popup__input-error name-input-error">Текст ошибки</span>
                </label>

                <label htmlFor="profession-input" className="popup__label">
                    <input id="profession-input" name="profession" className="popup__input popup__input_type_profile"
                        type="text" placeholder="Профессия" minLength="2" value={description || ''} onChange={handleChangeProfession} maxLength="200" required />
                    <span className="popup__input-error profession-input-error ">Текст ошибки</span>
                </label>
            </PopupWithForm>


        </>
    );
}

export default EditProfilePopup; 