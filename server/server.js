const express = require('express')
const path = require('path')

const usersRoutes = require('./routes/users')

const messagesRoutes = require('./routes/messages')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/messages', messagesRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
