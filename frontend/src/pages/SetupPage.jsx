// src/pages/SetupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAws, FaDocker, FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import './SetupPage.css';

// The JSON policy for the user to copy
const iamPolicyJson = `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "eks:ListClusters",
                "eks:DescribeCluster"
            ],
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "ec2:DescribeRegions",
            "Resource": "*"
        }
    ]
}`;

// The Helm script for the user to copy
const helmScript = `helm repo add kubecents https://charts.kubecents.io
helm repo update
helm install kubecents-agent kubecents/agent \\
  --namespace kubecents-agent \\
  --create-namespace`;


function SetupPage() {
  const [awsRoleArn, setAwsRoleArn] = useState('');
  const [policyCopied, setPolicyCopied] = useState(false);
  const [helmCopied, setHelmCopied] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = (text, setTextCopied) => {
    navigator.clipboard.writeText(text);
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 2000); // Reset after 2 seconds
  };

  const handleArnSubmit = (e) => {
    e.preventDefault();
    console.log("Simulating ARN submission:", awsRoleArn);
    alert("Setup complete! Redirecting to your dashboard.");
    navigate('/dashboard');
  };

  return (
    <div className="setup-page">
      <div className="setup-container">
        <header className="setup-header">
          <h1>Connect Your AWS Environment</h1>
          <p>Follow these steps to securely connect your Kubernetes cluster to Kubecents.</p>
        </header>

        <main className="steps-container">
          {/* --- Step 1: AWS IAM Role --- */}
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3><FaAws /> Create an AWS IAM Role</h3>
              <p>Create a read-only IAM role in your AWS account to allow Kubecents to discover your EKS clusters securely.</p>
              <h4>IAM Policy Template</h4>
              <p>In the AWS IAM Console, create a new policy using the JSON below.</p>
              <div className="code-block-wrapper">
                <pre className="code-block">{iamPolicyJson}</pre>
                <button onClick={() => copyToClipboard(iamPolicyJson, setPolicyCopied)} className="copy-button">
                  {policyCopied ? <FaClipboardCheck /> : <FaClipboard />}
                </button>
              </div>
            </div>
          </div>

          {/* --- Step 2: Deploy Agent with Helm --- */}
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3><FaDocker /> Deploy the Kubecents Agent via Helm</h3>
              <p>Install our lightweight agent into your cluster using Helm. This agent collects metrics and metadata.</p>
              <h4>Helm Installation Commands</h4>
              <p>Run the following commands in your terminal with `kubectl` configured to your cluster.</p>
              <div className="code-block-wrapper">
                <pre className="code-block">{helmScript}</pre>
                <button onClick={() => copyToClipboard(helmScript, setHelmCopied)} className="copy-button">
                  {helmCopied ? <FaClipboardCheck /> : <FaClipboard />}
                </button>
              </div>
            </div>
          </div>

          {/* --- Step 3: Submit ARN --- */}
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Complete the Connection</h3>
              <p>After creating the IAM role in Step 1, paste its ARN below to finalize the setup.</p>
              <form onSubmit={handleArnSubmit} className="arn-form">
                <input
                  type="text"
                  placeholder="arn:aws:iam::123456789012:role/YourRoleName"
                  value={awsRoleArn}
                  onChange={(e) => setAwsRoleArn(e.target.value)}
                  required
                />
                <button type="submit">Complete Setup &rarr;</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SetupPage;