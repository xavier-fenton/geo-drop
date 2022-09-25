import React from 'react'
import * as L from 'leaflet'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {

  return (
    <MapContainer
      className="h-full rounded-lg mb-6"
      center={[-36.86667, 174.76667]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=<your token goes here>" />
    </MapContainer>
  )
}
