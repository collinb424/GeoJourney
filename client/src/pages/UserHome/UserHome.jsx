import React, { useEffect } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import background from '../../assets/images/TestUserHomeBackground.png';
import './UserHome.css';
import logo from '../../assets/images/Logo.png';
import CustomCard from '../../components/CustomCard';
import Earth from '../../assets/images/Earth.png';
import Arizona from '../../assets/images/Arizona.png';
import axios from 'axios';

function UserHome() {
  const fetchScores = () => {
    const token = localStorage.getItem('jwt-token');

    const config = {
      headers: {
        token: token,
      },
    };

    axios
      .get('/user/scores', config)
      .then((response) => {
        // Handle the response, i.e., set state with the scores or pass to a function etc.
        console.log(response.data);
      })
      .catch((err) => {
        // Handle the error.
        console.error(err);
      });
  };

  return (
    <div className="user-container">
      <div className="user-header">
        <img className="user-logo" src={logo} alt="Logo" />
        <div className="user-title-container">
          <h1 className="user-title">Welcome Collin!</h1>
        </div>
        <div className="user-buttons">
          <PrimaryButton text="Log out" />
          <PrimaryButton text="My scores" handleClick={fetchScores} />
        </div>
      </div>
      <div className="user-imgbox">
        <img
          src={background}
          alt="Background of road next to ocean and mountains"
          className="center-fit"
        />
      </div>
      <div className="user-modes">
        <h1 className="user-modes-title">Game Modes</h1>
        <div className="user-cards">
          <CustomCard image={Earth} altText="Earth" title="World" />
          <CustomCard image={Arizona} altText="Arizona" title="Arizona" />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
