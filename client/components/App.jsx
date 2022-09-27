import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

// Component Imports
import Home from './Home'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import UserProfile from './UserProfile'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Users from './Users'
import Landing from './Landing'

import { clearUser } from '../actions/user'
import { getUsers } from '../apis/users'

function App() {
  cacheUser(useAuth0)
  //check if user is a user or not
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUsers(token))
        .then((userInDb) => {
          console.log(userInDb)
          userInDb ? navigate('/') : navigate('/profile')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Users />} />
      <Route path="/" element={<PingRoutes />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/userprofile" element={<UserProfile />} />

      <Route path="/profile" element={<Registration />} />
    </Routes>
  )
}

export default App
