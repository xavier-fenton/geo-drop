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
    <div className="text-lg bg-stone-200 p-6 h-10 mb-9">
      <div className="flex flex-row justify-evenly">
        <p className="text-black">{location.lat}</p>
        <img className="w-16" src="images/spin.gif" alt="" />
        <p className="text-black">{location.long}</p>
      </div>
    </div>
  )
}
