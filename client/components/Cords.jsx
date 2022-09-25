import React, { useEffect, useState } from 'react'

export default function Cords() {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        })
      })
    } else {
      // x.innerHTML = 'Geolocation is not supported by this browser.'
      alert('Geolocation is not supported by this browser.')
    }
  }, [location])

  return (
    <div className="text-lg p-6 h-20">
      <div className="flex flex-row justify-evenly">
        <p className="">{location.lat}</p>
        <p className="">{location.long}</p>
      </div>
    </div>
  )
}
