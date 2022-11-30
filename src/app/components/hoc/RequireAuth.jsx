import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../store/user';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const isLoggedIn = useSelector(getIsLoggedIn());
    if (!isLoggedIn) {
        return <Navigate to="/login/login" state={{ from: location }} />;
    }
    return children;
};

export default RequireAuth;
