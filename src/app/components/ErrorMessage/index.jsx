import React from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ error }) => {
    return <div className={styles.error_message}>{error}</div>;
};

export default ErrorMessage;
