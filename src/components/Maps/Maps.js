// KEY: AIzaSyA2A1xc8sr0OQpnDuwyj0kv4LCSw7jMMlA
import classes from './Maps.module.scss'
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FaTooth } from 'react-icons/fa'

export const SimpleMap = () => {
  const location = {
    center: {
      lat: 42.884136,
      lng: -85.615897,
    },
    zoom: 15,
  }

  return (
    <div className={classes.Maps}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA2A1xc8sr0OQpnDuwyj0kv4LCSw7jMMlA' }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}>
        <div className={classes.Marker} lat={42.884136} lng={-85.615897}>
          <FaTooth size='3rem' />
        </div>
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
