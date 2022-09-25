import React, { useState } from 'react'

export default function Slider() {
  const [radius, setRadius] = useState(0)

  function handleChange(event) {
    console.log('change')
    setRadius(event.target.value)
    console.log(radius)
  }

  return (
    <div className="text-white flex justify-center mt-px">
      <p>{radius}</p>
      <input
        min="0.005"
        max="0.05"
        step="0.001"
        type="range"
        value={radius}
        onChange={handleChange}
      />
    </div>
  )
}
