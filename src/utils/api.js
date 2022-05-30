class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._headers.authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status));
    }

    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    changeLikeCardStatus(cardId, isLiked) {
        return !isLiked ? this.deleteLike(cardId) : this.addLike(cardId)
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    updAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
    headers: {
        authorization: 'a9707e34-62b5-41bf-b58b-1d72c6c41940',
        'Content-Type': 'application/json'
    }
}); 