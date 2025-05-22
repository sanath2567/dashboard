import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import eyeOpen from './images/eye.png';      // ensure correct path
import eyeOff from './images/eye-off.png';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        // You can store JWT token here if needed
        navigate('/dashboard');
      }
    } catch (error) {
      setError('Invalid username or password',error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Login Page</h2>
        <p className="login-subtitle">Welcome back! AVR Please enter your Username and Passowrd.</p>

        {error && <div className="error-msg">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <div className="password-wrapper">
            <input
              className="login-input password-input"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <img
                src={showPassword ? eyeOpen : eyeOff}
                alt={showPassword ? 'Hide password' : 'Show password'}
                style={{ width: '22px', height: '22px', pointerEvents: 'none' }}
              />
            </button>
          </div>

          <label className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
