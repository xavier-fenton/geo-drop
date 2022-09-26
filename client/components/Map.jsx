import React from 'react'
import * as L from 'leaflet'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//map
export default function Map() {
  return (
    <MapContainer
      className="h-full rounded-lg mb-6"
      center={[-36.86667, 174.76667]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q" />
    </MapContainer>
  )
}
