import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

// Component Imports
import Home from './Home'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import UserProfile from './UserProfile'
import Users from './Users'
import Landing from './Landing'

import { Routes, Route } from 'react-router-dom'






function App() {
  cacheUser(useAuth0)

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
