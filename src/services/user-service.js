const { User } = require('../models/user');

function create(name, password) {
    const user = new User()

    user.name = name
    user.password = password

    const logUser = user.save()
    return logUser
}

async function getUserById(id) {
    const user = await User.findByPk(id)
    if(!user){
        throw new Error(`Usuario no encontrado`)
    }
    return user
}

module.exports = { create, getUserById }
