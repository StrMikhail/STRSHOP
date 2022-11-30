import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signUp } from '../../store/user';

const ListItem = ({ user }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const chooseUser = () => {
        navigate(from, { replace: false });
        dispatch(signUp({ username: user.username, password: user.password }));
    };

    return (
        <div onClick={chooseUser}>
            <p> nick: {user.username}</p>
            <p> password: {user.password}</p>
        </div>
    );
};

export default ListItem;
