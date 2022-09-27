const connection = require('./connection')

function getMessage(input, db = connection) {
  const lat = Number(input.lat)
  const long = Number(input.long)
  const r = Number(input.r)

  console.log(lat, long, r)

  return db('users')
    .join('messages', 'users.auth0_id', 'messages.msg_auth0_id')
    .whereBetween('messages.lat', [lat - r, lat + r])
    .whereBetween('messages.long', [long - r, long + r])
    .select(
      'users.auth0_id as auth0Id',
      'users.name as name',
      'users.email as email',
      'users.description as description',
      'messages.id as messageId',
      'messages.lat as lat',
      'messages.long as long',
      'messages.name as ignoreName',
      'messages.msg as msg',
      'messages.date_created as dateCreated',
      'messages.image_path as imagePath'
    )
}

function getMessagesById(auth0Id, db = connection) {
  console.log(auth0Id)
  return db('users')
    .join('messages', 'users.auth0_id', 'messages.msg_auth0_id')
    .where('users.auth0_id', auth0Id)
    .select(
      'users.auth0_id as auth0Id',
      'users.name as name',
      'users.email as email',
      'users.description as description',
      'messages.id as messageId',
      'messages.lat as lat',
      'messages.long as long',
      'messages.name as ignoreName',
      'messages.msg as msg',
      'messages.date_created as dateCreated',
      'messages.image_path as imagePath'
    )
}

function addMessage(messageEntry, db = connection) {
  const messageEntryInput = {
    lat: messageEntry.lat,
    long: messageEntry.long,
    msg: messageEntry.msg,
    msg_auth0_id: messageEntry.auth0Id,
    date_created: new Date(Date.now()),
  }
  return db('messages').insert(messageEntryInput)
}

function updateMessage(messageId, updatedMessageEntry, db = connection) {
  const updatedMessageEntryInput = {
    msg: updatedMessageEntry.msg,
    date_created: new Date(Date.now()),
  }
  return db('messages')
    .select()
    .where('id', messageId)
    .update(updatedMessageEntryInput)
}

module.exports = {
  getMessage,
  addMessage,
  getMessagesById,
  updateMessage,
}
