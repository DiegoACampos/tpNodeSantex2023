const { User } = require('../models/user');
const userService = require('../services/user-service')

async function createUser(req, res) {
    const { name, password } = req.body;
    await userService.create(name, password)
    res.status(201).send("Usuario creado correctamente")
}

async function loginUser(req, res, next) {
    const { id, password } = req.body
    try {
        const result = await userService.login(id, password)
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}

module.exports = { createUser, loginUser }
