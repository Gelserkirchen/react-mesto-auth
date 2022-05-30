import { useContext } from 'react';
import Card from '../components/Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <button style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" alt="Аватар" onClick={onEditAvatar}></button>
                <div className="profile__info">
                    <div className="profile__name-section">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="cards">
                {
                    cards.map((card) => {
                        return <Card cardData={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id} />
                    })
                }
            </section>
        </main>
    );
}

export default Main; 