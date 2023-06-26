import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicHome from './pages/PublicHome/PublicHome.jsx';
import UserHome from './pages/UserHome/UserHome.jsx';
import Game from './pages/Game/Game.jsx';
import AuthContext from './contexts/AuthContext.js';
import Private from './routes/Private.jsx';
import axios from 'axios';
import { LoadScript } from '@react-google-maps/api';
import Summary from './pages/Summary/Summary.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
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
        }
      })
      .catch(err => console.log(err));
    }
  }, []);


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
