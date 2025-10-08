// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  // If the user has a token (is logged in), render the requested page.
  // The <Outlet /> component is a placeholder for the child route (e.g., DashboardPage).
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;