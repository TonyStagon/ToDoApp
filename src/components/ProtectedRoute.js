import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication';

const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : < Navigate to = "/home" / > ;
};

export default ProtectedRoute;