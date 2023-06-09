const userService = require('../services/user-service')

async function createLogin(req, res, next) {
  const { name, password } = req.body;
  try {
    const user = await userService.createUser(name, password);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { createLogin };


