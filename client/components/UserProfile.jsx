import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Map from './Map'
import Bio from './Bio'
import { useAuth0 } from '@auth0/auth0-react'
import { getMessagesById } from '../api'
import moment from 'moment'

export default function UserProfile() {
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
      <Nav />
      <Bio />
      <div id="map" style={{ height: '380px' }}>
        <Map messages={messages} />
      </div>
      <section>
        <a
          href="/"
          className="  flex flex-col mb-6 justify-center mx-6 mt-3 p-3 rounded-full border-2 drop-shadow-xl   text-center btn btn-active btn-ghost"
        >
          Home
        </a>
      </section>

      <section className="relative flex mx-6 mt-3 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Your Messages</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </section>
      <ul>
        {messages.map((message) => (
          <li key={message.messageId}>
            <section className="mx-6 bg-no-repeat bg-cover bg-center bg-blue-400 my-3 p-2 text-white drop-shadow-xl rounded-lg">
              {`${message.msg}`}
            </section>

            <section className="mx-6 text-gray-400 text-sm">
              {`${moment(message.dateCreated).format('DD/MM/YYYY HH:MM:SS')}`}
            </section>
          </li>
        ))}
      </ul>
    </>
  )
}
