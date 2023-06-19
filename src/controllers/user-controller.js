const { User } = require('../models/user');
const userService = require('../service/user-service')

async function createUser(req, res) {
    const { name, password } = req.body;
    await userService.create(name, password)
    res.status(201).send("Usuario creado correctamente")
}

async function getUserById(req, res, next) {
    const { id } = req.params;
    try {
        const user = await libraryService.getUser(id)
        res.status(200).send("Usuario autorizado")
    } catch (error) {
        next(error)
    }
}

module.exports = { createUser, getUserById }
