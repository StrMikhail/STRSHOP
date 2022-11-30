import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { clearCart } from '../store/cart';
import { logout } from '../store/user';

const LogOut = () => {
    const dispatch = useDispatch();
    dispatch(logout());
    dispatch(clearCart());
    return <Navigate to="/" />;
};

export default LogOut;
