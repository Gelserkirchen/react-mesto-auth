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

    isAuth() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject('Ошибка: ', res.status))
    }
}

export const auth = new Auth({
    baseUrl: 'https://auth.nomoreparties.co',
    headers: {
        // authorization: 'a9707e34-62b5-41bf-b58b-1d72c6c41940',
        'Content-Type': 'application/json'
    }
}); 