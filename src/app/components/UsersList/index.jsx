import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList, getUsers } from '../../store/user';
import ListItem from './ListItem';
import styles from './UsersList.module.scss';
const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers());

    useEffect(() => {
        dispatch(fetchUserList(5));
    }, []);
    return (
        <div className={styles.list}>
            <h3>You can register or use the user data available in the database to log in</h3>
            <div className={styles.array}>
                {users && users.map((user, id) => <ListItem key={id} user={user} />)}
            </div>
        </div>
    );
};

export default UsersList;
