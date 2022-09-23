import React, { useEffect, useState } from 'react'

import { getMessages } from '../api'

export default function Message() {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  })
  const [message, setMessage] = useState([])
  const [loader, setLoader] = useState(true)
  const [button, setButton] = useState(true)

  function handleClick(e) {
    e.preventDefault()
    setButton(!button)
  }

  const accuracyOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  useEffect(() => {
    setLoader(true)
    navigator.geolocation.getCurrentPosition((position) => {
      const crd = position.coords
      console.log(`Recorded latitude: ${crd.latitude}`)
      console.log(`Recorded longitude: ${crd.longitude}`)
      console.log(`More or less: ${crd.accuracy} meters`)
      setLocation({
        long: crd.longitude,
        lat: crd.latitude,
      })
      getMessages({
        long: crd.longitude,
        lat: crd.latitude,
      })
        .then((res) => {
          console.log(res)
          setMessage(res)
        })
        .finally(() => setLoader(false))
        .catch('')
    })
  }, [button])


  return (
    <div>
      {!loader ? (
        <>
          {console.log(message)}
          <ul>
            {message.map((messages) => (

              <li key={messages.id}>{`${messages.name} says ${messages.msg}`}</li>
            ))}
          </ul>
          <p id="demo"></p>
        </>
      ) : (
        <p>Searching for messages...</p>
      )}
      <button onClick={handleClick}>Search For New Message</button>
    </div>
  )
}
