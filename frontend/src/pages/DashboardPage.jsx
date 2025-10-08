// src/pages/DashboardPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's token from storage
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div style={{ padding: '50px', color: 'white', textAlign: 'center' }}>
      <h1>Welcome to the Kubecents Dashboard!</h1>
      <p>This is your protected dashboard page. We will build this out later.</p>
      <button 
        onClick={handleLogout} 
        style={{ 
          padding: '10px 20px', 
          fontSize: '1rem', 
          cursor: 'pointer',
          backgroundColor: 'var(--accent-blue)',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;