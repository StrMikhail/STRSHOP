import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList, getIsLoggedIn } from '../../store/user';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        dispatch(fetchUserList());
    }, []);

    return children;
};

export default AuthProvider;
