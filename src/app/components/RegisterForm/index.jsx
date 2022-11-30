import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';
import { validator } from '../../utils/validator';
import TextField from '../Form/textField/TextField';

const RegisteForm = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: '',
    });

    const [errors, setErrors] = useState({ error: null });
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        username: {
            isRequired: {
                message: 'Username is required',
            },
        },
        password: {
            isRequired: { message: 'Password is required' },
        },
        email: {
            isRequired: { message: 'Password is required' },
        },
        firstname: {
            isRequired: { message: 'Password is required' },
        },
        lastname: {
            isRequired: { message: 'Password is required' },
        },
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;
    console.log(isValid);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        // if (!isValid) return;
        // const newData = {
        //     ...data,
        //     qualities: data.qualities.map((q) => q.value)
        // };
        // dispatch(signUp(newData))
    };
    return (
        <div className={styles.register}>
            <h2>Registration</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    error={errors.username}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <TextField
                    label="First Name"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    error={errors.firstname}
                />
                <TextField
                    label="Last Name"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    error={errors.lastname}
                />
                <button className="button" disabled={!isValid}>
                    <span>Registrate</span>
                </button>
            </form>
            <span>
                Do you have account? <Link to="/login/login">Sign in</Link>
            </span>
        </div>
    );
};
export default RegisteForm;
