import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicHome from './pages/PublicHome/PublicHome.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';
import Game from './pages/Game/Game.jsx';
import AuthContext from './contexts/AuthContext.js';
import Private from './routes/Private.jsx';
import axios from 'axios';
import { LoadScript } from '@react-google-maps/api';
import Summary from './pages/Summary/Summary.jsx';
import { Box, Spinner } from '@chakra-ui/react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    if (token) {
      axios.get('http://localhost:4000/user/validate-token', { 
        headers: {
          'token': token
        }
      })
      .then(response => {
        if (response.data) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('jwt-token');
          setIsAuthenticated(false);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <Spinner size='xl'/>
      </Box>
    );
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/user" element={<Private component={UserHome} />} />
          <Route path="/" element={<PublicHome />} />
          <Route path="/game/:location" element={<Private component={Game} />}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
