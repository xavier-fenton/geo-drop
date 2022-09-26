const express = require('express')
const { ReactReduxContext } = require('react-redux')
const { checkJwt } = require('../auth0')
const db = require('../db/messages')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  const input = req.query

  try {
    const msg = await db.getMessage(input)
    res.json(msg)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.get('/:auth0Id', async (req, res) => {

  try {
    const auth0Id = req.params.auth0Id
    const messagesById = await db.getMessagesById(auth0Id)

    const messageById = messagesById.map((message) => {
      return message
    })

    res.json(messageById)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

router.post('/', checkJwt, (req, res) => {
  const { name, lat, long, msg } = req.body
  console.log(req.body)

  db.addMessage({ name, lat, long, msg })
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})
