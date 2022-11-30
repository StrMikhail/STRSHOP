import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { validator } from '../../utils/validator';
import styles from './LogIn.module.scss';
import UsersList from '../UsersList';
import TextField from '../Form/textField/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentUserError, getIsLoginError, signUp } from '../../store/user';
import ErrorMessage from '../ErrorMessage';
const LogInForm = () => {
    const dispatch = useDispatch();
    const loginError = useSelector(getIsLoginError());
    const [data, setData] = useState({ username: '', password: '' });
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
    };

    useEffect(() => {
        validate();
        setTimeout(() => {
            dispatch(clearCurrentUserError());
        }, 8000);
        return () => clearTimeout();
    }, [data, loginError]);

    useEffect(() => {}, []);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;
    console.log(isValid);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        dispatch(signUp(data));
    };
    return (
        <div className={styles.login}>
            <h2>Sign In</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    error={errors.username}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <button className="button" disabled={!isValid}>
                    <span>Enter</span>
                </button>
            </form>
            <span>
                Do you have no account?<Link to="/login/register">Registrate</Link>
            </span>
            {loginError && <ErrorMessage error={loginError} />}

            <UsersList />
        </div>
    );
};

export default LogInForm;
