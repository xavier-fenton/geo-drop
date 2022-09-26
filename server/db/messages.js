const connection = require('./connection')

function getMessage(input, db = connection) {

  const lat = Number(input.lat)
  const long = Number(input.long)
  const r = Number(input.r)

  console.log(lat, long, r)

  return db('messages')
    .whereBetween('lat', [lat - r, lat + r])
    .whereBetween('long', [long - r, long + r])
    .select('msg', 'msg_auth0_id as auth0Id', 'date_created as dateCreated', 'image_path as imagePath', 'lat', 'long')
}

function getMessagesById(auth0Id, db = connection) {
  return db('users')
    .join('messages', 'users.auth0_id', 'messages.msg_auth0_id')
    .where('users.auth0_id', auth0Id)
    .select(
      'users.auth0_id as auth0Id',
      'users.name as name',
      'users.email as email',
      'users.description as description',
      'messages.lat as lat',
      'messages.long as long',
      'messages.name as ignoreName',
      'messages.msg as msg',
      'messages.date_created as dateCreated',
      'messages.image_path as imagePath'
    )
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

function updateMessage(messageId, auth0Id, updatedMessageEntry, db = connection) {
  const updatedMessageEntryInput = {
    msg: updatedMessageEntry.msg,
    date_created: new Date(Date.now())
  }
  return db('messages').select().where('id', messageId).update(updatedMessageEntryInput)
}

module.exports = {
  getMessage,
  addMessage,
  getMessagesById,
  updateMessage
}