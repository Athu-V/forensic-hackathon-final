import React from 'react';
import { Database, Upload, RefreshCw, CheckCircle2, AlertTriangle, Play, Pause, Activity } from 'lucide-react';

const PipelineStage = ({ title, status, progress, icon: Icon }) => (
  <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ padding: '8px', background: 'var(--bg-surface-hover)', borderRadius: '8px', color: 'var(--accent-primary)' }}>
          <Icon size={20} />
        </div>
        <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</h3>
      </div>
      <span style={{ 
        fontSize: '0.75rem', 
        padding: '2px 8px', 
        borderRadius: '99px',
        background: status === 'active' ? 'rgba(0, 255, 170, 0.1)' : 'rgba(148, 163, 184, 0.1)',
        color: status === 'active' ? 'var(--accent-primary)' : 'var(--text-secondary)',
        border: `1px solid ${status === 'active' ? 'var(--accent-primary)' : 'var(--border-color)'}`
      }}>
        {status.toUpperCase()}
      </span>
    </div>
    
    <div style={{ marginTop: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
        <span style={{ color: 'var(--text-secondary)' }}>Processing status</span>
        <span style={{ fontWeight: 600 }}>{progress}%</span>
      </div>
      <div style={{ height: '6px', background: 'var(--bg-surface-hover)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ 
          height: '100%', 
          width: `${progress}%`, 
          background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
          transition: 'width 0.5s ease'
        }} />
      </div>
    </div>
  </div>
);

const AssetIngestion = () => {
  return (
    <div className="ingestion-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Asset Ingestion Pipeline</h1>
          <p className="page-subtitle">Manage automated data harvesting, normalization, and indexing processes.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="glass-panel" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
            <RefreshCw size={16} /> Force Sync
          </button>
          <button style={{ 
            background: 'var(--accent-primary)', color: 'var(--bg-base)', 
            padding: '10px 24px', borderRadius: 'var(--radius-sm)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <Upload size={18} /> New Data Source
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <PipelineStage title="OSINT Harvester" status="active" progress={65} icon={Database} />
        <PipelineStage title="Telegram Log Sync" status="active" progress={92} icon={RefreshCw} />
        <PipelineStage title="NLP Normalization" status="idle" progress={0} icon={CheckCircle2} />
        <PipelineStage title="Vector Indexing" status="active" progress={41} icon={Activity} />
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Ingestion Queue</h3>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--accent-primary)' }}>● 12 Running</span>
            <span style={{ color: 'var(--text-secondary)' }}>● 4 Queued</span>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <th style={{ padding: '12px 0' }}>SOURCE ID</th>
              <th>DATA TYPE</th>
              <th>THROUGHPUT</th>
              <th>LAST UPDATE</th>
              <th style={{ textAlign: 'right' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'SRC-8012', type: 'JSON Stream', speed: '4.2 MB/s', time: 'Just now' },
              { id: 'SRC-7721', type: 'Binary/Image', speed: '12.8 MB/s', time: '2 mins ago' },
              { id: 'SRC-9005', type: 'Text Content', speed: '1.1 MB/s', time: '5 mins ago' },
              { id: 'SRC-4432', type: 'Metadata', speed: '0.8 MB/s', time: '12 mins ago' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
                <td style={{ padding: '16px 0', fontWeight: 600, color: 'var(--accent-secondary)' }}>{row.id}</td>
                <td>{row.type}</td>
                <td className="mono">{row.speed}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{row.time}</td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button style={{ color: 'var(--text-secondary)' }}><Pause size={16} /></button>
                    <button style={{ color: 'var(--accent-danger)' }}><AlertTriangle size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetIngestion;
