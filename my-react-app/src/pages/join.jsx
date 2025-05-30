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
            <p>Create an account to save your favorite tracks and get<br></br> personalized recommendations.</p>
            
        </div>

        <div className="input-container">

        <form onSubmit={handleSubmit} className="join-form">

            <div className="title-1">
            <h5 className='title-2'>Name</h5>
            <input 
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            </div>


            <div className="title-1">
            <h5 className='title-2'>Email</h5>
            <input 
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            </div>

            <div className="title-1">

            <h5 className='title-2'>Password</h5>

            <input 
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
            />

            </div>

            <div className="title-1">

            <h5 className='title-2'>Confirm Password</h5>

            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />

            </div>


            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Account created!</p>}

            <button type="submit">Create Account</button>
        </form>

        </div>
    </div>
    )
}

export default Join;