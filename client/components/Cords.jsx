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
    <div className="text-lg bg-stone-200 p-6 h-10">
      <div className="flex flex-row justify-evenly">
        <p className="text-white">{location.lat}</p>
        <p className="text-white">{location.long}</p>
      </div>
    </div>
  )
}
