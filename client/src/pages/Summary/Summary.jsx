import React, { useEffect, useContext } from 'react';
import './Summary.css';
import LargerButton from '../../components/LargerButton';
import logo from '../../assets/images/Logo.png';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import PrimaryButton from '../../components/PrimaryButton';

const JWT_TOKEN = 'jwt-token';
const API_URL = `${process.env.REACT_APP_API_BASE_URL}/game/finish`;

const Summary = ({ results }) => {
  const totalScore = results.reduce((total, result) => total + result.scr, 0);
  const { location } = useParams();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const postGameData = async () => {
      const token = localStorage.getItem(JWT_TOKEN);

      const config = {
        headers: {
          token: token,
        },
      };

      const gameData = {
        gameMode: location,
        totalScore: totalScore,
      };

      try {
        await axios.post(API_URL, gameData, config);
      } catch (err) {
        console.error(err);
      }
    };

    postGameData();
  }, [totalScore, location]);

  const handleLogOut = () => {
    localStorage.removeItem(JWT_TOKEN);
    authContext.setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="summary-container">
      <header className="summary-header">
        <div className="summary-whole-logo">
          <img className="summary-logo" src={logo} alt="Logo" />
          <h6 className="summary-logo-title">GeoJourney</h6>
        </div>
        <h1 className="summary-title">Results</h1>
        <div className="summary-logout">
          <PrimaryButton
            className="summary-logout"
            text="Log out"
            handleClick={handleLogOut}
          />
        </div>
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
              <td className="bold-cell">Total Score</td>
              <td className="bold-cell">{totalScore}</td>
            </tr>
          </tbody>
        </table>
        <LargerButton
          text="Home"
          bg="#0E3239"
          handleClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default Summary;
