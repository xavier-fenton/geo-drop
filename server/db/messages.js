const connection = require('./connection')

// getMessage returns all Messages based on GEO input irrespective of users

function getMessage(input, db = connection) {

  const lat = Number(input.lat)
  const long = Number(input.long)
  const r = Number(input.r)

  console.log(lat, long, r)

  return db('messages')
    .whereBetween('lat', [lat - r, lat + r])
    .whereBetween('long', [long - r, long + r])
    .select('msg', 'msg_auth0_id as auth0Id', 'date_created', 'image_path', 'lat', 'long')
}

function getMessagesById(auth0Id, db = connection) {
  return db('users')
    .join('messages', 'auth0_id', 'messages.msg_auth0_id')
    .where('auth0_id', auth0Id)
    .select()
}

function addMessage(auth0Id, messageEntry, db = connection) {
  const messageEntryInput = {
    lat: messageEntry.lat,
    long: messageEntry.long,
    msg: messageEntry.msg,
    msg_auth0_id: auth0Id,
    date_created: new Date(Date.now())
  }
  return db('messages').insert(messageEntryInput)
}

module.exports = {
  getMessage,
  addMessage,
  getMessagesById
}

// terminal lat: '-36.8692362162736', long: '174.7473588339253
// DB    -36.8645,                  174.7766

// long: 174.7473588339253, lat: -36.8692362162736

//  return db('messages')
// .whereBetween('lat', [input.lat - r, input.lat + r])
// .whereBetween('long', [input.long - r, input.long + r])
// .select('msg')
// }
