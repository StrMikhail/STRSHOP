import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { getItemsCount, getTotalPrice } from '../../store/cart';
import { setCategory, setFilter, setSort } from '../../store/filter';
import { getIsLoggedIn, getUsersLoadingStatus } from '../../store/user';
import CartIcon from '../Cart/CartIcon/CartIcon';
import LogInButtons from '../LogInButtons';
import Search from '../Search/Search';
import styles from './Header.module.scss';

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getIsLoggedIn());
    const totalPrice = useSelector(getTotalPrice());
    const cartCount = useSelector(getItemsCount());
    const isLoading = useSelector(getUsersLoadingStatus());
    const onRefreshData = () => {
        dispatch(setCategory('all'));
        dispatch(setFilter(''));
        dispatch(
            setSort({
                name: 'popular',
                sortProperty: 'popular',
            }),
        );
    };
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" onClick={onRefreshData}>
                    <img src={logo} alt="Shop logo" />
                    <div>
                        <h1>shopstr</h1>
                        <p>best goods best price</p>
                    </div>
                </Link>
            </div>
            <Search />
            <div className={styles.header_cart}>
                <CartIcon price={totalPrice} count={cartCount} />
                <LogInButtons currentUser={currentUser} isLoading={isLoading} />
            </div>
        </div>
    );
};

export default Header;
