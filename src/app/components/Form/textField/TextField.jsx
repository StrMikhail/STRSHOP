import { useEffect, useState } from 'react';
import styles from './TextField.module.scss';

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [show, setShow] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value });
    };
    const setActive = () => {
        setShow(!show);
    };

    return (
        <div className={styles.text_filed}>
            <div className={styles.group_field}>
                <input
                    className={styles.input_field}
                    type={show ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    error={error}
                />

                <label className={value.length > 0 ? styles.active_label : null} htmlFor={name}>
                    {label}
                </label>

                {type === 'password' && (
                    <span className={show ? styles.active : null} onClick={setActive}>
                        {'>'}
                    </span>
                )}
            </div>
            <div className={styles.error}>{error}</div>
        </div>
    );
};

export default TextField;
