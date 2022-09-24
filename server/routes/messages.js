const express = require('express')
// const checkJwt = require('../auth0')
const db = require('../db/messages')

const router = express.Router()

module.exports = router

// /api/v1/messages?lat=-36.8645&long=174.7765

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


router.post('/', (req, res) => {
  const { name, lat, long, msg } = req.body

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