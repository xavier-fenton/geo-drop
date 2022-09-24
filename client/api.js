import request from 'superagent'

const rootUrl = '/api/v1'

// MESSAGES

export function getMessages(location) {
  return request
    .get(`${rootUrl}/messages?lat=${location.lat}&long=${location.long}`)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
    .catch(logError)
}

export function addMessages(messageEntry) {
  const { name, lat, long, msg } = messageEntry
  console.log(messageEntry)

  return request
    .post('/api/v1/messages')
    .send({ name, lat, long, msg })
    .then((response) => response.body)
}

// Get Fruits

export function getFruits() {
  return request
    .get(`${rootUrl}/fruits`)
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function addFruit(fruit, token) {
  return request
    .post(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ fruit })
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function updateFruit(fruit, token) {
  return request
    .put(`${rootUrl}/fruits`)
    .set('authorization', `Bearer ${token}`)
    .send({ fruit })
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function deleteFruit(id, token) {
  return request
    .delete(`${rootUrl}/fruits/${id}`)
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body.fruits)
    .catch(logError)
}

export function getUser(token) {
  return request
    .get(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addUser(user, token) {
  return request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('Username already taken - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error(
      'Only the user who added the fruit may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}