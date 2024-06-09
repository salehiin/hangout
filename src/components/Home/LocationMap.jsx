import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

import { googleAPIKey } from '../../components/Home/googleAPIKey'; // Importing the API key

const LocationMap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }} // Using the imported API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602} // Adjust the latitude and longitude for your marker
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

export default LocationMap;