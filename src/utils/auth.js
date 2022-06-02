class Auth {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl
        this._headers = headers
    }

    signUp(email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }

    isAuth(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        })
            .then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }
}

export const auth = new Auth({
    baseUrl: 'https://auth.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
}); 