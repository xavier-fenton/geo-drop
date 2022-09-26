const connection = require('./connection')

//TODO: implement getUserById

function getUsers(auth0Id, db = connection) {
  return db('users')
    .select('id', 'auth0_id as auth0Id', 'name', 'email', 'description')
    .where('auth0_id', auth0Id)
}

function addUser(input, db = connection) {
  const { auth0Id, name, email, description } = input
  const user = { auth0_id: auth0Id, name, email, description }
  return db('users').insert(user)
}

function updateUser(auth0Id, updatedUserInput, db = connection) {
  const { name, email, description } = updatedUserInput
  return db('users').where('auth_id', auth0Id).insert({ name, email, description })
}
module.exports = {
  getUsers,
  addUser,
  updateUser
}

