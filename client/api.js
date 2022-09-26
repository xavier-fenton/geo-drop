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

export function getMessagesById(auth0Id, token) {
  return request
    .get(`${rootUrl}/messages/${auth0Id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => {
      
      return res.body
    })
    .catch(logError)
}

// messageEntry body will require auth0Id
export function addMessage(messageEntry, token) {
  const { auth0Id, lat, long, msg } = messageEntry
  console.log(messageEntry)

  return request
    .post('/api/v1/messages')
    .set('Authorization', `Bearer ${token}`)
    .send({ auth0Id, lat, long, msg })
    .then((response) => {
      console.log(response)
      return response.body
    })
}

export function updateMessage(messageId, updatedMessageEntry, token) {
  const { msg } = updatedMessageEntry

  return request
    .post(`/api/v1/messages/${messageId}`)
    .set('Authorization', `Bearer ${token}`)
    .send({ msg })
    .then((response) => {
      console.log(response)
      return response.body
    })
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
      'Only the user who added the message may update and delete it'
    )
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/api.js):', err.message)
    throw err
  }
}
