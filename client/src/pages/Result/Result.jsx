import React, { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { distance } from '../../scripts/distance';
import { score } from '../../scripts/score';
import PrimaryButton from '../../components/PrimaryButton';
import './Result.css';

function Result({ guess, actual, onNext, location }) {
  const markerGuess = useMemo(
    () => ({ lat: guess.lat, lng: guess.lng }),
    [guess],
  );
  const markerActual = useMemo(
    () => ({ lat: actual[0], lng: actual[1] }),
    [actual],
  );

  const center = useMemo(() => ({ lat: 0, lng: 0 }), []);

  const options = useMemo(
    () => ({
      disableDefaultUI: true,
    }),
    [],
  );

  const mapContainerStyle = { height: '80vh', width: '100%' };

  const dist = distance(guess.lat, guess.lng, actual[0], actual[1]);
  const scr = score(dist, location);

  return (
    <div className="result-container">
      <GoogleMap
        id="result-map"
        mapContainerStyle={mapContainerStyle}
        zoom={1.5}
        center={center}
        options={options}
      >
        <Marker
          position={markerGuess}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/red-dot.png`,
          }}
        />
        <Marker
          position={markerActual}
          icon={{
            url: `http://maps.google.com/mapfiles/ms/icons/green-dot.png`,
          }}
        />
      </GoogleMap>
      <div className="card">
        <p>Distance: Your guess was {dist} miles away</p>
        <p>Score: {scr}</p>
        <PrimaryButton
          text="Next"
          bg="#4F9B3F"
          handleClick={() => onNext(dist, scr)}
        />
      </div>
    </div>
  );
}

export default Result;
