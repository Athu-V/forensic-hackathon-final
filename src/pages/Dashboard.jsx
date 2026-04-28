import React from 'react';
import { ShieldCheck, Target, Activity, AlertOctagon, TrendingUp, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', alerts: 12 },
  { name: '04:00', alerts: 19 },
  { name: '08:00', alerts: 15 },
  { name: '12:00', alerts: 45 },
  { name: '16:00', alerts: 32 },
  { name: '20:00', alerts: 55 },
  { name: '24:00', alerts: 20 },
];

const StatCard = ({ title, value, icon: Icon, trend, color }) => (
  <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{title}</h3>
      <div style={{ backgroundColor: `${color}15`, padding: '8px', borderRadius: '8px' }}>
        <Icon size={20} color={color} />
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
      <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>{value}</span>
      <span style={{ color: trend > 0 ? 'var(--accent-warning)' : 'var(--accent-primary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>
        <TrendingUp size={14} style={{ marginRight: '4px', transform: trend < 0 ? 'scaleY(-1)' : 'none' }} />
        {Math.abs(trend)}%
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Operational Overview</h1>
          <p className="page-subtitle">Real-time system health and threat metrics across all monitored networks.</p>
        </div>
        <button style={{ 
          background: 'var(--accent-primary)', color: 'var(--bg-base)', 
          padding: '10px 24px', borderRadius: 'var(--radius-sm)', fontWeight: 600
        }}>Generate Brief</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <StatCard title="Active Threats" value="142" icon={Target} trend={12} color="var(--accent-danger)" />
        <StatCard title="Critical Alerts" value="28" icon={AlertOctagon} trend={-5} color="var(--accent-warning)" />
        <StatCard title="Scanned Channels" value="3,092" icon={Search} trend={8} color="var(--accent-primary)" />
        <StatCard title="System Health" value="98.4%" icon={Activity} trend={0.2} color="var(--accent-secondary)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', fontSize: '1.1rem', fontWeight: 600 }}>Threat Velocity (24h)</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAlerts" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-danger)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-danger)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--accent-danger)' }}
                />
                <Area type="monotone" dataKey="alerts" stroke="var(--accent-danger)" strokeWidth={2} fillOpacity={1} fill="url(#colorAlerts)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '24px', fontSize: '1.1rem', fontWeight: 600 }}>Recent Intel Feed</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { time: '10 mins ago', desc: 'New group matching footprint found in region X', level: 'high' },
              { time: '1 hr ago', desc: 'Keyword breach on dark web forum thread #8012', level: 'critical' },
              { time: '3 hrs ago', desc: 'Telegram API scraper completed sync', level: 'info' },
              { time: '5 hrs ago', desc: 'Credential dump identified via automated OSINT', level: 'high' }
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', marginTop: '6px', backgroundColor: 
                  log.level === 'critical' ? 'var(--accent-warning)' : 
                  log.level === 'high' ? 'var(--accent-danger)' : 'var(--accent-primary)' 
                }} />
                <div>
                  <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{log.desc}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
