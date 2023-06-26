import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import PublicHome from './pages/PublicHome/PublicHome.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';
import Game from './pages/Game/Game.jsx';
import AuthContext from './contexts/AuthContext.js';
import Private from './routes/Private.jsx';
import axios from 'axios';
import { LoadScript } from '@react-google-maps/api';
import Summary from './pages/Summary/Summary.jsx';

function AppRoutes() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    if (token) {
      axios
        .get('http://localhost:4000/user/validate-token', {
          headers: {
            token: token,
          },
        })
        .then((response) => {
          if (response.data) {
            setIsAuthenticated(true);
            navigate('/user'); // navigate to /user
          } else {
            localStorage.removeItem('jwt-token');
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Routes>
        <Route path="/user" element={<Private component={UserHome} />} />
        <Route path="/" element={<PublicHome />} />
        <Route path="/game/:location" element={<Private component={Game} />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default AppRoutes;
