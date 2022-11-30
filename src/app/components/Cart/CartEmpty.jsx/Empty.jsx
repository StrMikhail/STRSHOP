import React from 'react';
import Image from '../../../img/empty-cart.png';
import styles from './Empty.module.scss';

const Empty = () => {
    return (
        <div className={styles.empty}>
            <div>
                <h2>Your cart is empty</h2>
                <span>It's time to fill it out</span>
            </div>
            <div>
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default Empty;
