import React, { useEffect, useState, useContext } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import ScoresModal from '../../components/Modals/ScoresModal';
import background from '../../assets/images/TestUserHomeBackground.png';
import './UserHome.css';
import logo from '../../assets/images/Logo.png';
import CustomCard from '../../components/CustomCard';
import Earth from '../../assets/images/Earth.png';
import Arizona from '../../assets/images/Arizona.png';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function UserHome() {
  const [scores, setScores] = useState([]);
  const [username, setUsername] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    const config = {
      headers: {
        token: token,
      },
    };

    axios
      .get('http://localhost:4000/user/scores', config)
      .then((response) => {
        setUsername(response.data.username);
        setScores(response.data.scores.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('jwt-token');
    authContext.setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <div className="user-whole-logo">
          <img className="user-logo" src={logo} alt="Logo" />
          <h6 className="logo-title">GeoJourney</h6>
        </div>
        <div className="user-title-container">
          <h1 className="user-title">{`Welcome ${username}!`}</h1>
        </div>
        <div className="user-buttons">
          <PrimaryButton text="Log out" handleClick={handleLogOut} />
          <PrimaryButton text="My scores" handleClick={onOpen} />
        </div>
      </div>
      <div className="user-imgbox">
        <img
          src={background}
          alt="Background of road next to ocean and mountains"
          className="user-center-fit"
        />
      </div>
      <div className="user-modes">
        <h1 className="user-modes-title">Game Modes</h1>
        <div className="user-cards">
          <CustomCard image={Earth} altText="Earth" title="World" />
          <CustomCard image={Arizona} altText="Arizona" title="Arizona" />
        </div>
      </div>
      <ScoresModal
        isOpen={isOpen}
        onClose={onClose}
        scores={scores.reverse()}
      />
    </div>
  );
}

export default UserHome;
