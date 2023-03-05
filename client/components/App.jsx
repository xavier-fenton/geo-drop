import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useCacheUser } from '../auth0-utils'

// Component Imports
import Home from './Home'
import Registration from './Registration'
import UserProfile from './UserProfile'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Landing from './Landing'

import { clearUser, setUser } from '../actions/user'
import { getUser } from '../api'

function App() {
  useCacheUser()
  //check if user is a user or not
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb ? dispatch(setUser(userInDb)) : navigate('/profile')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <div className="bg-stone-50 w-full min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/userprofile" element={<UserProfile />} />

        <Route path="/profile" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
