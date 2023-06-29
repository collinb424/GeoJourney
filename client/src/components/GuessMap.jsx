import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { useState, useMemo } from 'react';
import PrimaryButton from './PrimaryButton';
import LargerButton from './LargerButton';

function GuessMap({ onGuessSubmit }) {
  const [marker, setMarker] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const center = useMemo(() => ({ lat: 0, lng: 0 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker(newMarker);
    //onGuess(newMarker);
  };

  const mapContainerStyle = isHovered
    ? { height: '370px', width: '500px' }
    : { height: '190px', width: '285px' };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GoogleMap
        id="guess-map"
        mapContainerStyle={mapContainerStyle}
        zoom={1.5}
        center={center}
        onClick={handleMapClick}
        options={options}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
      <PrimaryButton
        text="Submit"
        bg="#4F9B3F"
        handleClick={() => {
          if (marker !== null) {
            onGuessSubmit(marker);
          }
        }}
      />
    </div>
  );
}

export default GuessMap;
