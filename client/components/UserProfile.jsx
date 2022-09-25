import React, { useEffect, useState } from 'react'
import { getMessages } from '../api'
import Nav from '../components/Nav'

import Home from './Home'
import Message from './Message'

export default function UserProfile() {
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
    <>
      <Nav />
      <Message messages={messages} />
      <p className="mr-px flex justify-center ">{radius}</p>
      <div className="px-6">
        <div className="flex justify-center ">
          <input
            className=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            min="0.005"
            max="0.05"
            step="0.001"
            type="range"
            value={radius}
            onChange={handleChange}
          />
        </div>
        {/* <div className=" w-full p-3 my-3 rounded-md border-2 drop-shadow-xl border-blue   text-center">
          <button className="text-center  " onClick={handleClick}>
            Search Area
          </button>
        </div> */}
      </div>
      {/* <Form loadMessages={loadMessages} /> */}

      <a
        href="/"
        className="flex flex-row justify-evenly text-lg p-3 drop-shadow-xl"
      >
        Back To Home Page
      </a>
    </>
  )
}
