function ImagePopup({ card, onClose, isOpen }) {

    return (
        <section className={`popup image-popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className="image-popup__container">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <img className="image-popup__picture" src={card.link} alt={card.name} />
                <p className="image-popup__description">{card.name}</p>
            </div>
        </section>
    );
}

export default ImagePopup; 