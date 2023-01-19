import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

//map
export default function Map(props) {
  return (
    <>
      <MapContainer
        className="h-full mx-6 rounded-lg mb-6"
        center={{ lat: -36.8682574, lng: 174.7656955 }}
        zoom={14}
        scrollWheelZoom={true}
      >
        {props.messages.map(({ lat, long, msg }, index) => (
          <Marker position={[lat, long]} key={index}>
            <Popup>{msg}</Popup>
          </Marker>
        ))}
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q" />
      </MapContainer>
    </>
  )
}
