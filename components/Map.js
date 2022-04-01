import React from 'react'
import MapReact, {Marker, Popup} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

function Map({destination, destinationDetail}) {
  return (
    <MapReact
      mapStyle='mapbox://styles/nuwandi/cl1dltol2001h15ruct1ggbtd'
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: destinationDetail.longitude,
        latitude: destinationDetail.latitude,
        zoom: 13
      }}
      style={{width: '100%', height: 400}}
      onViwportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker longitude={destinationDetail.longitude} latitude={destinationDetail.latitude} offsetLeft={-20} offsetTop={-10}>
        <p>📍</p>
      </Marker>

      <Popup longitude={destinationDetail.longitude} latitude={destinationDetail.latitude}>
        {destination[0].title}
      </Popup>
    </MapReact>
  );
}

export default Map
