import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Bio() {
  const [bio, setBio] = useState([])
  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    if (user) {
      console.log(user)
      setBio([user.email, user.nickname])
    }
  }, [isAuthenticated])

  return (
    <div>
      <section className="flex  justify-center h-12">
        <img src="icons/login.png" alt="" />
      </section>
      <section className="flex text-lg p-3 drop-shadow-xl  justify-center">
        <p>{bio[1]}</p>
      </section>

      <section className="flex text-lg p-3 drop-shadow-xl justify-center">
        <p>{bio[0]}</p>
      </section>
      <section>
        <a href="/" className="flex justify-center text-lg p-3 drop-shadow-xl">
          Home
        </a>
      </section>
    </div>
  )
}
