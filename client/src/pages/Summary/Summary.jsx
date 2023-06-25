import React, { useEffect } from 'react';
import './Summary.css';
import LargerButton from '../../components/LargerButton';
import logo from '../../assets/images/Logo.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Summary = ({ results }) => {
  const totalScore = results.reduce((total, result) => total + result.scr, 0);
  const { location } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');

    const config = {
      headers: {
        token: token,
      },
    };

    const gameData = {
      gameMode: location,
      totalScore: totalScore,
    };

    axios.post('/game/finish', gameData, config).catch((err) => {
      console.error(err);
    });
  }, [totalScore, location]);

  return (
    <div className="summary-container">
      <header className="summary-header">
        <img src={logo} alt="Logo" className="summary-logo" />
        <h1 className="summary-title">Results</h1>
      </header>
      <div className="summary-content">
        <table>
          <thead>
            <tr>
              <th>Round</th>
              <th>Distance</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.dist}</td>
                <td>{result.scr}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td class="bold-cell">Total Score</td>
              <td class="bold-cell">{totalScore}</td>
            </tr>
          </tbody>
        </table>
        <LargerButton text="Play" bg="#0E3239" />
      </div>
    </div>
  );
};

export default Summary;
