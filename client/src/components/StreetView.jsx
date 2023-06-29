import { GoogleMap, StreetViewPanorama } from '@react-google-maps/api';
import React, { useMemo } from 'react';

function StreetView({ coordinates }) {
  const mapContainerStyle = {
    height: '100vh',
    width: '100vw',
  };

  const center = useMemo(
    () => ({ lat: coordinates[0], lng: coordinates[1] }),
    [coordinates],
  );
  const options = useMemo(
    () => ({
      addressControl: false,
      showRoadLabels: false,
      zoom: 0,
      enableCloseButton: false,
      fullscreenControl: false,
      disableDefaultUI: true,
    }),
    [],
  );

  return (
    <div style={{ position: 'relative' }}>
      <GoogleMap
        id="street-view"
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <StreetViewPanorama
          position={center}
          visible={true}
          options={options}
        />
      </GoogleMap>
    </div>
  );
}

export default StreetView;
