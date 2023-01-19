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
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub
  console.log(auth0_id)
  db.getUser(auth0_id)
    .then((user) => {
      res.json(user)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// GET /api/v1/users/auth0|12334
router.get('/:auth0Id', async (req, res) => {
  const { auth0Id } = req.params

  try {
    // no db get function is written here yet
    res.json({ name: 'this route is setup just in case' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve user roles' })
  }
})

module.exports = router
