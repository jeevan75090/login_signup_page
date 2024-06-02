import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({ name: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        console.log(storedUser)

        if (storedUser && storedUser.name === credentials.name && storedUser.password === credentials.password) {
            navigate('/home');
            localStorage.setItem('login', 'true');

        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
            <p>if dont have an account <a onClick={() => navigate('/signup')}>Sign up</a></p>
        </form>
    );
};

export default Login;
