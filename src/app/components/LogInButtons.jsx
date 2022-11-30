import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout as exit } from '../store/user';
import Button from './Button/Button';

const LogInButtons = ({ currentUser, isLoading }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const tooltipRef = useRef(null);
    const logout = () => {
        dispatch(exit());
        navigate('/', { replace: true });
    };

    const toogleModal = () => {
        setShow(true);
    };

    useEffect(() => {
        if (!show) return;
        const handleClick = (e) => {
            if (!tooltipRef.current) return;
            if (!tooltipRef.current.contains(e.target)) {
                setShow(!show);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [show, setShow]);

    return (
        <>
            {currentUser ? (
                <Button setting="button_avatar" handleClick={toogleModal} reflink={tooltipRef}>
                    <span>
                        {(
                            currentUser?.name.firstname[0] + currentUser.name.lastname[0]
                        ).toUpperCase()}
                    </span>
                    {show && (
                        <div>
                            {/* <Link to="/profile">Profile</Link> */}
                            <Link to="/logout">Logout</Link>
                        </div>
                    )}
                </Button>
            ) : (
                <>
                    <Button setting="button_avatar">
                        <Link to="/login/login">
                            <span>Sign In</span>
                        </Link>
                    </Button>
                </>
            )}
        </>
    );
};

export default LogInButtons;
