import React from 'react'
import Nav from '../components/Nav'
import Map from './Map'

export default function UserProfile() {
  return (
    <>

      <Nav />
      <div id="map" style={{ height: '380px' }}>
        <Map />

      </div>
     
    </>
  )
}
