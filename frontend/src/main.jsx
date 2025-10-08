// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import SetupPage from './pages/SetupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute';
import './index.css'; // Global styles

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/setup',
    element: <SetupPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {path: 'dashboard', element: <DashboardPage />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);