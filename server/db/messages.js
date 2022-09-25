const connection = require('./connection')

function getMessage(input, db = connection) {
  const lat = Number(input.lat)
  const long = Number(input.long)
  const r = Number(input.r)

  return db('messages')
    .join('users', 'added_by_user', 'auth0_id')
    .whereBetween('lat', [lat - r, lat + r])
    .whereBetween('long', [long - r, long + r])
    .select('msg', 'id', 'name', 'added_by_user as addedByUser', 'lat', 'long')
}


function getMessageByUser(input, db = connection) {
  const user = input.auth0Id
  return db('messages')
    .where('added_by_user', user)
    .select('msg', 'id', 'name', 'added_by_user as addedByUser', 'lat', 'long')
}

function addMessage(messageEntry, db = connection) {
  const { name, lat, long, msg, added_by_user } = messageEntry
  console.log(messageEntry)
  return db('messages').insert({ name, lat, long, msg, added_by_user })
}

function updateMessage(newMessage, db = connection) {
  return db('messages').where('id', newMessage.id).update(newMessage)
}

function deleteMessage(id, db = connection) {
  return db('messages').where('id', id).delete()
}

module.exports = {
  getMessage,
  addMessage,
  getMessageByAuth0Id,
  updateMessage,
  deleteMessage
}

// terminal lat: '-36.8692362162736', long: '174.7473588339253
// DB    -36.8645,                  174.7766

// long: 174.7473588339253, lat: -36.8692362162736

//  return db('messages')
// .whereBetween('lat', [input.lat - r, input.lat + r])
// .whereBetween('long', [input.long - r, input.long + r])
// .select('msg')
// }
