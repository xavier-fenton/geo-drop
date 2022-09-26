import React, { useState, useEffect } from 'react'

// import { getIsAuthenticated } from '../auth0-utils'
// import { useAuth0 } from '@auth0/auth0-react'
// import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAuth0 } from '@auth0/auth0-react'
import { getMessagesById } from '../api'

//map
export default function Map() {
  const [messages, setMessage] = useState([])
  // const user = useSelector((state) => state.user)
  const { isAuthenticated, user } = useAuth0()

  // Get User Auth

  useEffect(async () => {
    if (user) {
      const userMessages = await getMessagesById(user.sub)

      // make api call
      setMessage(userMessages)
      console.log(userMessages)
    }
  }, [isAuthenticated])

  return (
    <MapContainer
      className="h-full rounded-lg mb-6"
      center={{ lat: -36.8682574, lng: 174.7656955 }}
      zoom={11}
      scrollWheelZoom={true}
    >
      {messages.map(({ lat, long, msg }, index) => (
        <Marker position={[lat, long]} key={index}>
          <Popup>
            {msg}
          </Popup>
        </Marker>
      ))}
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q" />
    </MapContainer>
  )
}
