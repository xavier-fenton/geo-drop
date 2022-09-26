import React, { useEffect, useState } from 'react'
import Cords from './Cords'
import Message from './Message'
import Form from './Form'
import Nav from './Nav'
import Logo from './Logo'

import { getMessages } from '../api'

export default function Home() {
  const [messages, setMessages] = useState([])
  const [radius, setRadius] = useState(0.05)

  function handleChange(event) {
    setRadius(event.target.value)
  }

  async function handleClick(e) {
    e.preventDefault()
    await navigator.geolocation.getCurrentPosition((position) => {
      loadMessages(position.coords)
    })
  }

  // it retrieves the current users locations, side effect function

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      loadMessages(position.coords)
    })

    // call the current number of the radius
  }, [])

  // calls the api function, passes through the coordinates then sets the states of the retrived messages
  async function loadMessages(crd) {
    const retrievedMessages = await getMessages({
      long: crd.longitude,
      lat: crd.latitude,
      r: radius,
    })

    setMessages(retrievedMessages)
  }

  return (
    <div className="w-screen bg-stone-200">
      {' '}
      <Cords />
      {/* <Logo /> */}
      <Message messages={messages} />
      <div className="flex flex-row justify-evenly">
        <div className="text-white flex justify-center mt-px">
          {/* <p>{radius}</p> */}
          <input
            min="0.005"
            max="0.05"
            step="0.001"
            type="range"
            value={radius}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center items-centre ">
          <button
            className="inline-block px-6 py-2 border-2 border-blue-500 text-blue-500 text-xs font-medium leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={handleClick}
          >
            Search Area
          </button>
        </div>
      </div>
      <Form loadMessages={loadMessages} />
      <Nav />
    </div>
  )
}
