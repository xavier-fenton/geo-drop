import React, { useEffect, useState } from 'react'

export default function Cords() {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  })

  useEffect(() => {
    const interval = setInterval(() => {
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
    }, 1000)
    return () => clearInterval(interval)
  }, [location])

  return (
    <div className="text-lg p-6 rounded-md border-2 border-blue">
      <div className="flex flex-row justify-evenly">
        <p>{location.lat}</p>
        <p>{location.long}</p>
      </div>
    </div>
  )
}
