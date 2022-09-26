const express = require('express')
const { checkJwt } = require('../auth0')

const db = require('../db/users')
const router = express.Router()

// POST /api/v1/users/protected
router.post('/', async (req, res) => {
  const { auth0Id, name, email, description } = req.body
  const user = { auth0Id, name, email, description }

  try {
    await db.addUser(user)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

// GET /api/v1/users/
router.get('/', (req, res) => {
  const auth0_id = req.user?.sub
  db.getUsers(auth0_id)
    .then((users) => {
      res.json({ users })
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/auth0|12334
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    res.json({ name: 'john doe' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve user roles' })
  }
})

module.exports = router
