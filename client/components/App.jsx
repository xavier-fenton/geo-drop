import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'

import PingRoutes from './PingRoutes'
import Registration from './Registration'

import Users from './Users'

import { Routes, Route } from 'react-router-dom'

import Home from './Home'

function App() {
  cacheUser(useAuth0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Users />} />
      <Route path="/" element={<PingRoutes />} />
      <Route path="/profile" element={<Registration />} />
    </Routes>
  )
}

export default App
