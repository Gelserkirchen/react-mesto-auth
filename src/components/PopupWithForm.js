function PopupWithForm({ name, title, isOpen, children, onClose, buttonText, onSubmit }) {

    return (
        <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container ">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className="popup__inputs" name={name} onSubmit={onSubmit}>
                    {children}
                    <button className="popup__save-button" type="submit">{buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;


