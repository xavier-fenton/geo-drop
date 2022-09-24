import React, { useEffect, useState } from 'react'
import Cords from './Cords'
import Message from './Message'
import Form from './Form'
import Nav from './Nav'
import Logo from './Logo'
import { getMessages } from '../api'

export default function Home() {
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
    <div className="min-h-screen flex flex-col">
      <Cords />
      <Logo />
      <Nav />
      <Message messages={messages} />
      <Form loadMessages={loadMessages} />
    </div>
  )
}
