import request from 'superagent'

const rootUrl = '/api/v1'

// MESSAGES

export function getMessages(location) {
  return request
    .get(
      `${rootUrl}/messages?lat=${location.lat}&long=${location.long}&r=${location.r}`
    )
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

export function getMessagesByUser(token) {
  return request
    .get(
      `${rootUrl}/messages`
    )
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      return res.body
    })
    .catch(logError)
}

export function addMessages(messageEntry, token) {
  const { name, lat, long, msg, added_by_user } = messageEntry

  return request
    .post(`${rootUrl}/messages`)
    .set('Authorization', `Bearer ${token}`)
    .send({ name, lat, long, msg, added_by_user })
    .then((response) => response.body)
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
      'Only the user who added the Message may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
