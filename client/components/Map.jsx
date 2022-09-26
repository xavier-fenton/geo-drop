import React, { useState, useEffect } from 'react'

// import { getIsAuthenticated } from '../auth0-utils'
// import { useAuth0 } from '@auth0/auth0-react'
// import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAuth0 } from '@auth0/auth0-react'

//map
export default function Map() {
  const [coords, setCoords] = useState([])
  // const user = useSelector((state) => state.user)
  const { isAuthenticated, user } = useAuth0()

  // Get User Auth

  useEffect(() => {
    if (user) {
      console.log(user?.sub)
      // make api call
      // setState(messages)
    }
  }, [isAuthenticated])

  const updateMap = [
    // now you can add a new object to add to the array

    { lat: -36.85328, lng: 174.767874 },
    { lat: -36.8682574, lng: 174.7656955 },
    { lat: -36.848976, lng: 174.75951 },
    { lat: -36.8682574, lng: 174.7656955 },
    { lat: -35.689487, lng: 174.7656955 },
    { lat: -36.852913, lng: 174.757745 },
  ]

  useEffect(() => {
    setCoords(updateMap)
    console.log(updateMap)
  }, [])

  // console.log(user.name)

  return (
    <MapContainer
      className="h-full rounded-lg mb-6"
      center={{ lat: -36.8682574, lng: 174.7656955 }}
      zoom={11}
      scrollWheelZoom={true}
    >
      {coords.map(({ lat, lng }, index) => (
        <Marker position={[lat, lng]} key={index}>
          <Popup>
            {index + 1} is for popup with lat: {lat} and lon {lng}
          </Popup>
        </Marker>
      ))}
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q" />
    </MapContainer>
  )
}
