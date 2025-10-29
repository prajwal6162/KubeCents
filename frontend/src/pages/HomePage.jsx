// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCloud, FaCogs, FaBell, FaShieldAlt, FaLightbulb, FaReact, FaPython, FaAws, FaEnvelope, FaUsers } from 'react-icons/fa';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-new">
      <nav className="navbar">
        <div className="nav-logo">Kubecents</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="btn btn-nav-secondary">Login</Link>
          <Link to="/register" className="btn btn-nav-primary">Register</Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="hero-section-new">
        <div className="hero-overlay"></div> {/* For the subtle background pattern */}
        
        {/* Block 1: The text content */}
        <div className="hero-content-new">
          <span className="hero-pre-title">Cloud-native Kubernetes Cost Intelligence</span>
          <h1>Kubecents – Kubernetes <br/>Cost Monitoring & Optimization</h1>
          <p className="hero-description">
            Kubecents is a cloud-native SaaS platform designed to simplify Kubernetes monitoring and cost optimization.
            It enables DevOps teams and organizations to gain real-time visibility into their clusters, track pod-level
            resource usage, and receive actionable alerts. By connecting your AWS account securely, Kubecents provides
            accurate cost estimations, optimization insights, and performance metrics — all from a centralized dashboard.
          </p>
          <p className="hero-description">
            With Kubecents, you save time, reduce cloud bills, and ensure your infrastructure scales efficiently without overspending.
          </p>
          <div className="cta-buttons-new">
            <Link to="/register" className="btn btn-hero-primary">Get Started <FaCloud /></Link>
            <Link to="/login" className="btn btn-hero-secondary">Login</Link>
          </div>
        </div>
        
        {/* Block 2: The SVG graphic (MOVED TO THE CORRECT POSITION) */}
        <div className="hero-graphic">
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--accent-blue)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--accent-green)', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8e7cc3', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#38a3a5', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Base card */}
            <rect x="10" y="10" width="380" height="280" rx="15" fill="rgba(22, 27, 34, 0.6)" stroke="rgba(255,255,255,0.1)" />
            {/* Header */}
            <rect x="30" y="30" width="100" height="10" rx="5" fill="rgba(255,255,255,0.2)" />
            {/* Chart 1 (Line) */}
            <polyline points="40,150 80,120 120,140 160,110 200,130" fill="none" stroke="url(#grad1)" strokeWidth="3" />
            <circle cx="40" cy="150" r="3" fill="var(--accent-blue)" />
            <circle cx="200" cy="130" r="3" fill="var(--accent-green)" />
            {/* Chart 2 (Bars) */}
            <rect x="240" y="120" width="20" height="60" rx="3" fill="url(#grad2)" opacity="0.8" />
            <rect x="270" y="100" width="20" height="80" rx="3" fill="url(#grad2)" opacity="0.6" />
            <rect x="300" y="140" width="20" height="40" rx="3" fill="url(#grad2)" opacity="0.4" />
            {/* Small text blocks */}
            <rect x="40" y="200" width="150" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
            <rect x="40" y="220" width="120" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
            {/* Floating dots for effect */}
            <circle className="float1" cx="350" cy="50" r="5" fill="var(--accent-blue)" />
            <circle className="float2" cx="50" cy="80" r="3" fill="var(--accent-green)" />
            <circle className="float3" cx="360" cy="250" r="4" fill="#8e7cc3" />
          </svg>
        </div>
      </header>

      {/* --- Why Choose Kubecents Section --- */}
      <section id="features" className="section-padded why-choose-section">
        <h2>Why teams choose Kubecents</h2>
        <p className="section-subtitle">Purpose-built for Kubernetes environments with deep cost and performance insights.</p>
        <div className="features-grid-new">
          <div className="feature-card-new">
            <FaChartLine className="feature-icon-new" />
            <h3>Real-time visibility</h3>
            <p>Live cost and resource usage across clusters, namespaces, and pods. Drill down from cluster to pod-level CPU, memory, and cost allocation in seconds.</p>
          </div>
          <div className="feature-card-new">
            <FaCogs className="feature-icon-new" />
            <h3>Prometheus & Grafana</h3>
            <p>Native integration for intuitive, familiar dashboards.</p>
            <p>Plug into your existing observability stack while enriching it with cost signals.</p>
          </div>
          <div className="feature-card-new">
            <FaLightbulb className="feature-icon-new" />
            <h3>Workload right-sizing</h3>
            <p>Detect underutilized or overprovisioned workloads.</p>
            <p>Receive actionable recommendations to reclaim waste and lower cluster costs.</p>
          </div>
          <div className="feature-card-new">
            <FaBell className="feature-icon-new" />
            <h3>Threshold-based alerting</h3>
            <p>Configure budgets and alerts by namespace, label, or deployment for proactive control.</p>
          </div>
          <div className="feature-card-new">
            <FaShieldAlt className="feature-icon-new" />
            <h3>DR readiness & health</h3>
            <p>Continuously monitor cluster health for resilience.</p>
            <p>Ensure disaster recovery readiness with health checks and SLOs across regions.</p>
          </div>
          <div className="feature-card-new explore-docs-card">
            <h3>Explore the docs</h3>
            <p>Learn how to connect your AWS account, install the agent, and start tracking costs in minutes.</p>
            <Link to="/setup" className='btn btn-explore-docs'>Read docs</Link>
          </div>
        </div>
      </section>
      
      {/* --- About Kubecents Section --- */}
      <section id="about" className="section-padded about-section">
        <h2>About Kubecents</h2>
        <p className="section-description">
          We are on a mission to make Kubernetes cost and performance transparent and actionable for every team.
        </p>
      </section>

      {/* --- Contact Us Section --- */}
      <section id="contact" className="section-padded contact-section">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>Questions or feedback? Reach out and we'll get back to you.</p>
          <div className="contact-links">
            <a href="mailto:hello@kubecents.io" className="btn btn-contact"><FaEnvelope /> hello@kubecents.io</a>
            <a href="#" className="btn btn-contact"><FaUsers /> Join our community</a>
          </div>
        </div>
      </section>


      {/* --- Start Optimizing Section --- */}
      <section className="section-padded optimize-section">
        <div className="optimize-card">
          <h2>Start optimizing your Kubernetes costs today</h2>
          <p>Join DevOps teams using Kubecents to gain clarity, cut waste, and scale with confidence.</p>
          <div className="cta-buttons-new">
            <Link to="/register" className="btn btn-optimize-primary">Create account</Link>
            <Link to="/login" className="btn btn-optimize-secondary">Login</Link>
          </div>
        </div>
      </section>

      <footer className="footer-new">
        <p>&copy; 2025 Kubecents. All rights reserved.</p>
        <p className="tech-stack-info">Built with React, FastAPI, AWS & Kubernetes SDKs</p>
      </footer>
    </div>
  );
}

export default HomePage;