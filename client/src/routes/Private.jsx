import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext.js';

function Private({ component: Component, ...rest }) {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
}

export default Private;
