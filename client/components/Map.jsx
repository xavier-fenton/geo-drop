import React, { useState, useEffect } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAuth0 } from '@auth0/auth0-react'
import { getMessagesById } from '../api'
import Bio from './Bio'
import moment from 'moment/moment'

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
    }
  }, [isAuthenticated])

  return (
    <>
      <Bio />

      <MapContainer
        className="h-full rounded-lg mb-6"
        center={{ lat: -36.8682574, lng: 174.7656955 }}
        zoom={12}
        scrollWheelZoom={true}
      >
        {messages.map(({ lat, long, msg }, index) => (
          <Marker position={[lat, long]} key={index}>
            <Popup>{msg}</Popup>
          </Marker>
        ))}
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q" />
      </MapContainer>
      <p className="mx-6 text-large text-centre">Your messages</p>
      <ul>
        {messages.map((message) => (
          <>
            <li key={message.messageId}>
              <section className="mx-6 bg-no-repeat bg-cover bg-center bg-blue-400 my-3 p-2 text-white drop-shadow-xl rounded-lg">
                {`${message.msg}`}
              </section>

              <section className="mx-6 text-gray-400 text-sm">
                {`${moment(message.dateCreated).format('DD/MM/YYYY HH:MM:SS')}`}
              </section>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}
