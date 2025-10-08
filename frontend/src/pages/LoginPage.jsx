// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCubes, FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginPage.css'; // We will create this new CSS file

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // This is the mock login handler we will connect to the backend later
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Simulating a successful login...");
    
    // Set a dummy token to make our ProtectedRoute work
    localStorage.setItem('token', 'fake-jwt-token-for-login');
    
    // For now, we'll just redirect to the dashboard.
    // In the next step, this is where we'll check if the user needs to go to /setup or /dashboard.
    alert("Login successful! Redirecting to the dashboard.");
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <Link to="/" className="logo-link">
          <FaCubes />
          <h1>Kubecents</h1>
        </Link>
        <p>Cloud Security & Compliance</p>
      </div>

      <div className="login-card">
        <div className="login-card-content">
          <h2>Sign in to your account</h2>
          <p>Monitor and optimize your Kubernetes clusters</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input 
                  type={passwordVisible ? "text" : "password"} 
                  id="password" 
                  placeholder="Enter your password" 
                  required 
                />
                <button 
                  type="button" 
                  className="password-toggle" 
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn-submit">Sign In</button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
      
      <p className="login-footer">Protected by End-to-End Encryption • SOC 2 Compliant</p>
    </div>
  );
}

export default LoginPage;