import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { useContext } from 'react';

function Card({ cardData, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = cardData.owner._id === currentUser._id;
    const isLiked = cardData.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `${isOwn ? 'card__delete-button' : 'card__delete-button_hidden'}`
    );
    const cardLikeButtonClassName = (
        `${isLiked ? 'card__like-button_active' : 'card__like-button'}`
    );

    function handleClick(e) {
        const link = e.target.src;
        const name = e.target.alt;
        onCardClick({ link, name });
    }

    function handleLikeClick() {
        onCardLike(cardData)
    }

    function handleDeleteClick() {
        onCardDelete(cardData)
    }

    return (
        <div className="card">
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button"></button>
            <img src={cardData.link} className="card__image" alt={cardData.name} onClick={
                (e) => { handleClick(e) }
            } />
            <div className="card__description">
                <h2 className="card__text">{cardData.name}</h2>
                <div className="card__like-section">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <span className="card__like-number">{cardData.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;