import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Bio() {
  const [bio, setBio] = useState([])
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    if (user) {
      setBio([user.email, user.nickname])
    }
  }, [isAuthenticated])

  return (
    <div>
      <section className="flex justify-center h-24 drop-shadow-xl">
        <img src="icons/5087607.png" alt="" />
      </section>

      <section className="relative flex mx-32  items-center">
        <div className="flex-grow border-t border-gray-400"></div>

        <div className="flex-grow border-t border-gray-400"></div>
      </section>
      <div className="flex flex-col mt-6 items-center h-16 justify-center">
        <section className=" text-lg font-bold tracking-wider">
          <p>{bio[1]}</p>
        </section>

        <section className="text-sm mb-6 leading-snug">
          <p>{bio[0]}</p>
        </section>
      </div>
    </div>
  )
}
