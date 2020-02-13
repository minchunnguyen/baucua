class UsersStorage {
    constructor(key) {
        this._key = key
    }

    get() {
        let users = localStorage.getItem(this._key)
        if (users) {
            return JSON.parse(users)
        } else {
            const userAdmin = [{ username: 'admin', password: 'admin', soTien: 0 }]
            this.set(userAdmin)
            return userAdmin
        }
    }
    set(value) {
        value = JSON.stringify(value)
        localStorage.setItem(this._key, value)
    }

    addUser(user) {
        const oldList = this.get();
        oldList.push(user);
        this.set(oldList)
    }
}

export default UsersStorage = new UsersStorage('users');