const uuid = require('uuid')

export const cookieParse = () => {}

export const randomSecretKey = () => {
    return uuid()
}

export const findUser = (users, id, userName) => {
    const user = users.find(u => {
        return u.userName === userName && u.id === id
    })
    return user
}