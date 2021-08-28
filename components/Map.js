import { LocationMarkerIcon } from '@heroicons/react/solid'
import { getCenter } from 'geolib/es'
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  // transform the search results

  const coordinates = searchResults?.map((result) => ({
    longituda: result.long,
    latitude: result.lat
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    // latitude: center.latitude,
    // longituda: center.longitude,
    latitude: 51.50996326851979,
    longituda: -0.08452479386870407,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/danngo/cksvhdbon0li717nsxdax3u0w'
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      {...viewport}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              <LocationMarkerIcon className='h-5' />
            </p>
          </Marker>
          
          {/* The popup that should show if we click on a Marker */}

          {selectedLocation.long === result.long ? (
            <Popup
              latitude={result.lat}
              longitude={result.long}
              onClose={() => setSelectedLocation({})}
              onClick={true}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
