const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

function create(name, password) {
    const user = new User()

    user.name = name
    user.password = password

    const logUser = user.save()
    return logUser
}

async function login(name,password) {
    const user = await User.findOne({
        where:{
            name: name,
            password: password
        }
    })
    if(!user){
        throw new Error(`Id y/o password incorrectos`)
    }

    const token = jwt.sign({
        id:user.id,
        name:user.name,
    }, 'claveUltraSecreta')
    
    return {
        accesToken: token
    }
}

module.exports = { create, login }
