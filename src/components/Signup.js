import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user));
        alert('User Registered');
        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <select name="profession" onChange={handleChange} required>
                <option value="">Select Profession</option>
                <option value="Engineer">Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
            </select>
            <button type="submit">Sign Up</button>
            <p>if already have an account <a onClick={() => navigate('/')}>Login</a></p>
        </form>
    );
};

export default Signup;
