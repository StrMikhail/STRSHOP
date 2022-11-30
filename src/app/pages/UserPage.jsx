import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import { getIsLoggedIn } from '../store/user';

const UserPage = () => {
    // const orders
    const user = useSelector(getIsLoggedIn());
    return (
        <div className="contianer">
            {user.username}
            <Button setting="button_orange">
                <span>Click me</span>
            </Button>
        </div>
    );
};

export default UserPage;
