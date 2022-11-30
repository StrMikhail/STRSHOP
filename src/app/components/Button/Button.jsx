import React from 'react';
import styles from './Button.module.scss';
const Button = ({ handleClick, children, setting, reflink }) => {
    return (
        <button
            className={styles[setting]}
            onClick={handleClick && handleClick}
            ref={reflink ? reflink : null}>
            {children}
        </button>
    );
};

export default Button;
