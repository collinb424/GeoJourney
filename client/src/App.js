import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicHome from './pages/PublicHome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicHome />} />
      </Routes>
    </Router>
  );
}

export default App;
