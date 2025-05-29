import React, { useState } from 'react';
import "../join.css"; 

const Join = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
        setError('')
        setSuccess(false);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            setSuccess(false);
            return;
        }

        setError('')
        setSuccess(true)
    }



    return (
        <div className="join-container">
        <div className="join-title">
            <h1>Join Mood<span className="tunes-word">Tunes</span></h1>
            <p>Create an account to save your favorite tracks and get personalized recommendations.</p>
            
        </div>

        <form onSubmit={handleSubmit} className="join-form">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Account created!</p>}

            <button type="submit">Create Account</button>
        </form>
    </div>
    )
}

export default Join;