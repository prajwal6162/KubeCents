// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCubes, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import './RegisterPage.css'; // We will create this CSS file next

function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // For now, we simulate a successful registration
    console.log("Form submitted. Simulating registration...");
    alert("Registration successful! Redirecting to login...");
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* --- Left Column (Branding & Features) --- */}
        <div className="register-info">
          <Link to="/" className="info-logo">
            <FaCubes />
            Kubecents
          </Link>
          <h1 className="info-title">Start Your Journey to a Cost-Efficient Cluster</h1>
          <p className="info-description">
            Create your Kubecents account to gain real-time visibility into your Kubernetes costs and performance.
          </p>
          <ul className="info-features">
            <li><FaCheckCircle className="feature-icon" /> Real-Time Cost Monitoring</li>
            <li><FaCheckCircle className="feature-icon" /> AI-Powered Optimization</li>
            <li><FaCheckCircle className="feature-icon" /> Secure AWS Integration</li>
            <li><FaCheckCircle className="feature-icon" /> Unlimited Pod Tracking</li>
          </ul>
          <p className="info-trusted">
            Trusted by DevOps teams worldwide
          </p>
        </div>

        {/* --- Right Column (Registration Form) --- */}
        <div className="register-form-wrapper">
          <form className="register-form" onSubmit={handleRegister}>
            <h2>Create your account</h2>
            <p>Start securing your AWS infrastructure today</p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="John" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input type={passwordVisible ? "text" : "password"} id="password" placeholder="Create a strong password" required />
                <button type="button" className="password-toggle" onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-wrapper">
                <input type={confirmPasswordVisible ? "text" : "password"} id="confirmPassword" placeholder="Confirm your password" required />
                <button type="button" className="password-toggle" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-group terms">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
            </div>

            <button type="submit" className="btn-submit">Create Account</button>

            <p className="login-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;