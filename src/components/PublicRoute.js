import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication';


const PublicRoute = ({ children }) => {
    return !isAuthenticated() ? children : < Navigate to = "/home" / > ;
};

export default PublicRoute;