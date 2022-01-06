import React from 'react'

import GoogleMapReact from 'google-map-react'
import LocationPin from './location-pin';
import "./map.css";

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBf06rm4leqHTtBVg7rVux3NGshUoDMQVM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

export default Map;