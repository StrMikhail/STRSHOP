import React, { useEffect } from 'react';
import LogInForm from '../components/LogInForm';
import RegisterForm from '../components/RegisterForm';
import { useLocation, useNavigate, useParams } from 'react-router';

const LoginPage = () => {
    const { type } = useParams();
    return <div className="container">{type === 'login' ? <LogInForm /> : <RegisterForm />}</div>;
};

export default LoginPage;
