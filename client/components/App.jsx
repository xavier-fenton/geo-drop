import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Message from './Message'
import Cords from './Cords'
import Users from './Users'
import Form from './Form'
import { Routes, Route } from 'react-router-dom'
import { getMessages } from '../api'

function App() {
  cacheUser(useAuth0)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      loadMessages(position.coords)
    })
  }, [])

  async function loadMessages(crd) {
    const retrievedMessages = await getMessages({
      long: crd.longitude,
      lat: crd.latitude,
    })
    setMessages(retrievedMessages)
  }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/" element={<Users />} />
        <Route path="/" element={<PingRoutes />} />
        <Route path="/profile" element={<Registration />} />
      </Routes>
      <Cords />
      <Message messages={messages} />
      <Form loadMessages={loadMessages} />
    </div>
  )
}

export default App
