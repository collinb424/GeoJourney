import React, { useEffect, useState } from 'react';
import randomStreetView from '../../scripts/random-streetview';
import StreetView from '../../components/StreetView';
import { LoadScript } from '@react-google-maps/api';
import GuessMap from '../../components/GuessMap';
import { useParams } from 'react-router-dom';
import arizonaData from '../../assets/data/arizona.json';
import Result from '../Result/Result';
import Summary from '../Summary/Summary';
import { Box, Flex, Text } from '@chakra-ui/react';

const Game = () => {
  // console.log('Game component rendered');
  const { location } = useParams();
  const [currentLocation, setCurrentLocation] = useState(null);
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
    setCurrentIndex(currentIndex + 1);
    setGuess(null);
    setPhase('game');
    setCurrentLocation(null);
  };

  const handleNewGame = () => {
    setResults([]);
    setCurrentIndex(0);
    setGuess(null);
    setPhase('game');
    setCurrentLocation(null);
  };

  useEffect(() => {
    const fetchData = async (location) => {
      let randomLocation;
      switch (location) {
        case 'World':
          console.log('before');
          await randomStreetView.setParameters({
            polygon: false,
          });
          randomLocation = await randomStreetView.getRandomLocation();
          setCurrentLocation(randomLocation);
          console.log('here');
          break;
        case 'Arizona':
          // const arizonaPolygon = arizonaData.geometries[0].coordinates[0];
          // console.log(arizonaPolygon);

          // const flattenedArizonaPolygon = arizonaPolygon.reduce(
          //   (acc, polygon) => acc.concat(polygon[0]),
          //   [],
          // );

          // const arizonaPolygon = [
          //   [
          //     [31.33239, -109.050076],
          //     [32.261521, -113.959223],
          //     [36.999884, -114.050162],
          //     [36.997788, -109.05874],
          //   ],
          // ];
          await randomStreetView.setParameters({
            polygon: [
              [31.33239, -109.050076],
              [32.261521, -113.959223],
              [36.999884, -114.050162],
              [36.997788, -109.05874],
            ],
          });

          console.log('before generating');
          randomLocation = await randomStreetView.getRandomLocation();
          console.log('Random location is: ', randomLocation);
          setCurrentLocation(randomLocation);
          break;
        default:
          break;
      }
    };
    fetchData(location);
  }, [location, currentIndex]);

  console.log(location);
  return (
    <>
      {console.log(currentLocation)}
      {phase === 'game' && currentIndex < 5 && currentLocation && (
        <>
          <Flex
            // direction="row"
            position="absolute"
            top="10px"
            right="10px"
            spacing={4}
            zIndex={2}
            gap="25px"
          >
            <Box
              backgroundColor="customGreen.500"
              borderRadius="lg"
              padding={3}
            >
              <Text fontSize="2xl" color="white">
                Round: {currentIndex + 1}/5
              </Text>
            </Box>
            <Box
              backgroundColor="customGreen.500"
              borderRadius="lg"
              padding={3}
            >
              <Text fontSize="2xl" color="white">
                Total Score:{' '}
                {results.reduce((acc, result) => acc + result.scr, 0)}
              </Text>
            </Box>
          </Flex>
          <StreetView coordinates={currentLocation} />
          <div
            style={{ position: 'absolute', bottom: 15, right: 10, zIndex: 1 }}
          >
            <GuessMap onGuessSubmit={handleGuessSubmission} />
          </div>
        </>
      )}
      {phase === 'result' && currentIndex < 5 && (
        <Result
          guess={guess}
          actual={currentLocation}
          onNext={handleNextRound}
          location={location}
        />
      )}
      {currentIndex === 5 && (
        <Summary results={results} handleNewGame={handleNewGame} />
      )}
    </>
  );
};

export default Game;
