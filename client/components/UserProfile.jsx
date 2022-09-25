import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMessages } from '../api'
import Nav from '../components/Nav'
import { fetchUsers } from '../actions/user'

import Map from './Map'
import Message from './Message'

export default function UserProfile() {
  // const dispatch = useDispatch()

  // // state of the users
  // const users = useSelector((state) => state.users)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  //   console.log(users)
  // }, [])

  // // pass through the user id
  // useEffect(async () => {
  //   await getMessages({
  //     users: 'user',
  //   })
  // }, [])

  return (
    <>
      <Nav />

      <a
        href="/"
        className="flex flex-row justify-evenly text-lg p-3 drop-shadow-xl"
      >
        Back To Home Page
      </a>
      <div id="map" style={{ height: '180px' }}>
        <Map />
      </div>
    </>
  )
}
