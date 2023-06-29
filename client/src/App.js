import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicHome from './pages/PublicHome/PublicHome.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';
import Game from './pages/Game/Game.jsx';
import AuthContext from './contexts/AuthContext.js';
import Private from './routes/Private.jsx';
import axios from 'axios';
import { Box, Spinner } from '@chakra-ui/react';

const JWT_TOKEN = 'jwt-token';
const API_URL = 'http://localhost:4000/user/validate-token';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem(JWT_TOKEN);
      if (token) {
        try {
          const response = await axios.get(API_URL, { 
            headers: {
              'token': token
            }
          });
          if (response.data) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem(JWT_TOKEN);
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    validateToken();
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
          <Route path="/" element={<PublicHome />} />
          <Route path="/user" element={<Private component={UserHome} />} />
          <Route path="/game/:location" element={<Private component={Game} />}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
