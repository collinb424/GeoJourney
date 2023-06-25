import React, { useEffect, useState } from 'react';
import randomStreetView from '../../scripts/random-streetview';
import StreetView from '../../components/StreetView';
import { LoadScript } from '@react-google-maps/api';
import GuessMap from '../../components/GuessMap';
import { useParams } from 'react-router-dom';
import arizonaData from '../../assets/data/arizona.json';
import Result from '../Result/Result';
import Summary from '../Summary/Summary';

const Game = () => {
  // console.log('Game component rendered');
  const { location } = useParams();
  const [lcn, setLcn] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState(null);
  const [phase, setPhase] = useState('game');
  const [results, setResults] = useState([]);

  const handleGuessSubmission = (guess) => {
    setGuess(guess);
    setPhase('result');
  };

  const handleNextRound = (dist, scr) => {
    console.log('next round');
    setResults([...results, { dist, scr }]);
    setCurrentIndex(currentIndex + 1); // go to the next round
    setGuess(null); // reset guess
    setPhase('game'); // return to game phase
    setLcn(null);
  };

  useEffect(() => {
    const fetchData = async (location) => {
      let loc;
      switch (location) {
        case 'World':
          console.log('before');
          loc = await randomStreetView.getRandomLocation();
          setLcn(loc);
          console.log('here');
          break;
        case 'Arizona':
          // if (currentIndex === 5) {
          //   // const parsedData = JSON.parse(arizonaData);
          //   const arizonaBoundaryCoordinates =
          //     arizonaData.geometries[0].coordinates[0];
          //   console.log(arizonaBoundaryCoordinates);
          //   const transformedCoordinates = arizonaBoundaryCoordinates.map(
          //     (coordinates) => {
          //       if (Array.isArray(coordinates)) {
          //         return coordinates.map(([lng, lat]) => [lat, lng]);
          //       }
          //     },
          //   );
          //   console.log('done');
          //   await randomStreetView.setParameters({
          //     polygon: transformedCoordinates,
          //   });
          //   locs = await randomStreetView.getRandomLocations(5);
          //   setLocations(locs);
          // }
          break;
        default:
          break;
      }
    };
    fetchData(location);
  }, [location, currentIndex]);

  console.log(location);
  return (
    <LoadScript googleMapsApiKey="AIzaSyDWjoWhrhM7CgKJD7hgQQFpswLFek0Nnb0">
      {console.log(lcn)}
      {phase === 'game' && currentIndex < 5 && lcn && (
        <>
          <StreetView coordinates={lcn} />
          <div
            style={{ position: 'absolute', bottom: 15, right: 10, zIndex: 1 }}
          >
            <GuessMap onGuessSubmit={handleGuessSubmission} />
          </div>
        </>
      )}
      {phase === 'result' && currentIndex < 5 && (
        <Result guess={guess} actual={lcn} onNext={handleNextRound} />
      )}
      {currentIndex === 5 && <Summary results={results} />}
    </LoadScript>
  );
};

export default Game;
