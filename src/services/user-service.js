const { libUser } = require('../models/user');

async function createUser(name, password) {
  try {
    const user = new libUser({
      name: name,
      password: password,
    });

    await user.save();

    return user;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}
module.exports = { createUser };

