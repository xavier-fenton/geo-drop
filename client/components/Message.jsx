import React, { useEffect, useState } from 'react'

import { getMessages } from '../api'

export default function Message(props) {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  })

  const [loader, setLoader] = useState(true)
  const [button, setButton] = useState(true)

  function handleClick(e) {
    e.preventDefault()
    setButton(!button)
  }

  // const accuracyOptions = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // }

  // useEffect(() => {
  //   setLoader(true)
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const crd = position.coords
  //     console.log(`Recorded latitude: ${crd.latitude}`)
  //     console.log(`Recorded longitude: ${crd.longitude}`)
  //     console.log(`More or less: ${crd.accuracy} meters`)
  //     setLocation({
  //       long: crd.longitude,
  //       lat: crd.latitude,
  //     })
  // }, [button])

  return (
    <>
      <div className="p-6  bg-stone-200">
        {loader ? (
          <div className="bg-gradient-to-br from-neutral-400 via-neutral-200 to-stone-50 overflow-scroll max-h-80 h-64  text-lg p-6 rounded-md border-2 border-blue ">
            <ul>
              {props.messages.map((messages) => (
                <li
                  className="bg-no-repeat bg-cover bg-center bg-blue-300 my-3 p-2 text-white drop-shadow-xl rounded-lg"
                  key={messages.id}
                >{`${messages.name} says ${messages.msg}`}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Searching for messages...</p>
        )}
      </div>
    </>
  )
}
