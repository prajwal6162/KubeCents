import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const demoData = {
  clusterCost: [10, 22, 30, 35, 40, 50, 55],
  costBreakdown: [6.52, 5.48, 5.02, 5.45], // network, memory, cpu, storage
  costByNamespace: [10.25, 8.52, 5.83, 3.08],
  costByDeployment: [6.34, 6.10, 4.88, 2.54],
  podCost: [
    { pod: 'nginx-abc123', namespace: 'prod', cost: 43.30, cpuCost: 29.62, memoryCost: 12.68 },
    { pod: 'api-xyz456', namespace: 'prod', cost: 38.57, cpuCost: 18.76, memoryCost: 16.21 },
    { pod: 'web-123def', namespace: 'default', cost: 27.51, cpuCost: 12.50, memoryCost: 10.54 },
    { pod: 'nginx-qwe769', namespace: 'dev', cost: 22.58, cpuCost: 10.92, memoryCost: 3.52 }
  ],
  namespaceCost: [10.25, 8.52, 5.83, 3.08],
  deploymentCost: [6.34, 6.10, 4.88, 2.54]
};

const tabs = [
  { id: 'pod', label: 'Pod' },
  { id: 'namespace', label: 'Namespace Cost' },
  { id: 'deployment', label: 'Deployment Cost' }
];

const colors = {
  network: '#facc15',
  memory: '#3b82f6',
  cpu: '#6366f1',
  storage: '#a78bfa',
  primary: '#4f8ef7',
  secondary: '#facc15',
};

const MonitoringDashboard = () => {
  const [activeTab, setActiveTab] = useState('pod');
  const [demoMode, setDemoMode] = useState(true);
  const [connectStatus, setConnectStatus] = useState('');
  const [grafanaUrl, setGrafanaUrl] = useState('');
  const [prometheusUrl, setPrometheusUrl] = useState('');

  // Chart data generators
  const clusterCostData = {
    labels: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        label: 'Cluster Cost ($)',
        data: demoData.clusterCost,
        borderColor: colors.primary,
        backgroundColor: 'rgba(79, 142, 247, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const costBreakdownData = {
    labels: ['Network', 'Memory', 'CPU', 'Storage'],
    datasets: [
      {
        data: demoData.costBreakdown,
        backgroundColor: [colors.network, colors.memory, colors.cpu, colors.storage],
        borderWidth: 0,
      },
    ],
  };

  const costByNamespaceData = {
    labels: ['Namespace A', 'Namespace B', 'Namespace C', 'Namespace D'],
    datasets: [
      {
        label: 'Cost by Namespace',
        data: demoData.costByNamespace,
        backgroundColor: colors.primary,
      },
    ],
  };

  const costByDeploymentData = {
    labels: ['Deployment A', 'Deployment B', 'Deployment C', 'Deployment D'],
    datasets: [
      {
        label: 'Cost by Deployment',
        data: demoData.costByDeployment,
        backgroundColor: colors.secondary,
      },
    ],
  };

  const namespaceCostData = {
    labels: ['Namespace A', 'Namespace B', 'Namespace C', 'Namespace D'],
    datasets: [
      {
        label: 'Namespace Cost',
        data: demoData.namespaceCost,
        backgroundColor: colors.primary,
      },
    ],
  };

  const deploymentCostData = {
    labels: ['Deployment A', 'Deployment B', 'Deployment C', 'Deployment D'],
    datasets: [
      {
        label: 'Deployment Cost',
        data: demoData.deploymentCost,
        backgroundColor: colors.secondary,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const handleConnect = () => {
    if (!grafanaUrl || !prometheusUrl) {
      setConnectStatus('Please enter both URLs.');
      return;
    }
    setConnectStatus('Connecting...');
    setTimeout(() => {
      setConnectStatus('Connected successfully! (Demo: Using mock data)');
    }, 2000);
  };

  return (
    <div style={{
      fontFamily: "'Inter', Arial, sans-serif",
      background: 'linear-gradient(270deg, #0f2027, #203a43, #2c5364)',
      backgroundSize: '600% 600%',
      animation: 'gradientBG 20s ease infinite',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <style>{`
        @keyframes gradientBG {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
        .tabs {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
          border-bottom: 1px solid #444;
          flex-wrap: wrap;
        }
        .tab {
          padding: 10px 20px;
          cursor: pointer;
          color: #bbb;
          font-weight: 600;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          user-select: none;
        }
        .tab.active {
          color: #fff;
          border-bottom-color: #4f8ef7;
        }
        .dashboard {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          overflow-y: auto;
          max-height: calc(100vh - 200px);
        }
        .card {
          background: #1e293b;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
          color: #e0e0e0;
        }
        .card h2 {
          margin-top: 0;
          font-weight: 600;
          margin-bottom: 15px;
        }
        .infoBox {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          border-radius: 8px;
          font-weight: 600;
        }
        .infoBox.savings {
          background-color: #064e3b;
          color: #a7f3d0;
        }
        .infoBox.alert {
          background-color: #7f1d1d;
          color: #fecaca;
        }
        .infoBox .icon {
          font-size: 24px;
        }
        .infoBox a {
          color: #93c5fd;
          text-decoration: none;
          font-weight: 500;
          margin-left: 10px;
        }
        .infoBox a:hover {
          text-decoration: underline;
        }
        .legend {
          display: flex;
          gap: 15px;
          margin-top: 10px;
          font-size: 14px;
        }
        .legendItem {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .legendColor {
          width: 14px;
          height: 14px;
          border-radius: 3px;
        }
        .legendNetwork { background-color: ${colors.network}; }
        .legendMemory { background-color: ${colors.memory}; }
        .legendCpu { background-color: ${colors.cpu}; }
        .legendStorage { background-color: ${colors.storage}; }
        table {
          width: 100%;
          border-collapse: collapse;
          color: #e0e0e0;
          font-size: 14px;
        }
        th, td {
          padding: 10px 12px;
          text-align: left;
          border-bottom: 1px solid #334155;
        }
        th {
          background-color: #334155;
          font-weight: 600;
        }
        tbody tr:hover {
          background-color: #475569;
        }
        .connectOptions {
          margin-bottom: 25px;
          background: #1e293b;
          padding: 15px 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
          max-width: 600px;
        }
        .connectOptions label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #cbd5e1;
        }
        .connectOptions input {
          width: 100%;
          padding: 8px 12px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: none;
          outline: none;
          font-size: 14px;
        }
        .connectOptions button {
          background-color: #4f8ef7;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .connectOptions button:hover {
          background-color: #3a6ed8;
        }
        #connectStatus {
          margin-top: 8px;
          font-weight: 600;
        }
        .demoToggle {
          margin-bottom: 25px;
          color: #cbd5e1;
          font-weight: 600;
        }
        .demoToggle label {
          cursor: pointer;
        }
      `}</style>

      <h1>KubeCents</h1>

      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="connectOptions">
        <h2>Connect to Grafana & Prometheus</h2>
        <label htmlFor="grafanaUrl">Grafana URL:</label>
        <input
          id="grafanaUrl"
          type="text"
          placeholder="e.g., http://localhost:3000"
          value={grafanaUrl}
          onChange={(e) => setGrafanaUrl(e.target.value)}
        />
        <label htmlFor="prometheusUrl">Prometheus URL:</label>
        <input
          id="prometheusUrl"
          type="text"
          placeholder="e.g., http://localhost:9090"
          value={prometheusUrl}
          onChange={(e) => setPrometheusUrl(e.target.value)}
        />
        <button onClick={handleConnect}>Connect</button>
        <p id="connectStatus">{connectStatus}</p>
      </div>

      <div className="demoToggle">
        <label>
          <input
            type="checkbox"
            checked={demoMode}
            onChange={() => setDemoMode(!demoMode)}
          />{' '}
          Use Demo Data
        </label>
      </div>

      {activeTab === 'pod' && (
        <div className="dashboard">
          <div className="card" style={{ gridColumn: 'span 2' }}>
            <h2>Cluster Cost</h2>
            <Line data={clusterCostData} options={chartOptions} />
          </div>
          <div className="card">
            <h2>Cost Breakdown (Last 24 h)</h2>
            <Doughnut data={costBreakdownData} options={{ cutout: '70%', plugins: { legend: { display: false } } }} />
            <div className="legend">
              <div className="legendItem"><div className="legendColor legendNetwork"></div>Network</div>
              <div className="legendItem"><div className="legendColor legendMemory"></div>Memory</div>
              <div className="legendItem"><div className="legendColor legendCpu"></div>CPU</div>
              <div className="legendItem"><div className="legendColor legendStorage"></div>Storage</div>
            </div>
          </div>
          <div className="card">
            <h2>Cost by Namespace</h2>
            <Bar data={costByNamespaceData} options={chartOptions} />
          </div>
          <div className="card">
            <h2>Cost by Deployment</h2>
            <Bar data={costByDeploymentData} options={chartOptions} />
          </div>
          <div className="card infoBox savings">
            <div className="icon">💰</div>
            <div>
              Estimated Savings:<br />
              <strong>$450</strong> per month
              <a href="#">View all</a>
            </div>
          </div>
          <div className="card infoBox alert">
            <div className="icon">⚠️</div>
            <div>
              Budget Alert<br />
              Over Budget in namespace 'prod'<br />
              Cost <strong style={{ color: '#f87171' }}>$210</strong> / $200 budget
            </div>
          </div>
          <div className="card" style={{ gridColumn: 'span 2' }}>
            <h2>Pod Cost</h2>
            <table>
              <thead>
                <tr>
                  <th>Pod</th>
                  <th>Namespace</th>
                  <th>Cost</th>
                  <th>CPU Cost</th>
                  <th>Memory Cost</th>
                </tr>
              </thead>
              <tbody>
                {demoData.podCost.map((pod) => (
                  <tr key={pod.pod}>
                    <td>{pod.pod}</td>
                    <td>{pod.namespace}</td>
                    <td>${pod.cost.toFixed(2)}</td>
                    <td>${pod.cpuCost.toFixed(2)}</td>
                    <td>${pod.memoryCost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'namespace' && (
        <div className="dashboard">
          <div className="card" style={{ gridColumn: 'span 2' }}>
            <h2>Cost by Namespace</h2>
            <Bar data={namespaceCostData} options={chartOptions} />
          </div>
        </div>
      )}

      {activeTab === 'deployment' && (
        <div className="dashboard">
          <div className="card" style={{ gridColumn: 'span 2' }}>
            <h2>Cost by Deployment</h2>
            <Bar data={deploymentCostData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MonitoringDashboard;
