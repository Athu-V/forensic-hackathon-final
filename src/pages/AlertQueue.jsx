import React, { useState } from 'react';
import { Filter, ChevronDown, CheckCircle2, AlertCircle, Clock, ExternalLink } from 'lucide-react';

const alertsData = [
  { id: 'AL-10029', severity: 'Critical', source: 'Telegram / DarkNet', target: 'Financial Records', status: 'Unassigned', time: '10:42 AM' },
  { id: 'AL-10028', severity: 'High', source: 'Twitter OSINT', target: 'Executive Doxxing', status: 'In Progress', time: '09:15 AM' },
  { id: 'AL-10027', severity: 'Medium', source: 'Forum Scraping', target: 'Brand Impersonation', status: 'Resolved', time: 'Yesterday' },
  { id: 'AL-10026', severity: 'Critical', source: 'Telegram / Private', target: 'Zero-day Exploit Sale', status: 'Unassigned', time: 'Yesterday' },
  { id: 'AL-10025', severity: 'Low', source: 'Automated Feeds', target: 'Spam Campaign', status: 'Unassigned', time: 'Mar 12' },
  { id: 'AL-10024', severity: 'High', source: 'Dark Web Marketplace', target: 'Leaked Credentials', status: 'In Progress', time: 'Mar 11' },
];

const AlertQueue = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return '#FF3366';
      case 'High': return '#FFBB00';
      case 'Medium': return '#00B8FF';
      default: return '#94A3B8';
    }
  };

  return (
    <div style={{ display: 'flex', gap: '24px', height: '100%' }}>
      {/* Table section */}
      <div style={{ flex: selectedAlert ? '1' : '100%', transition: 'all 0.3s ease' }}>
        <div className="page-header" style={{ marginBottom: '24px' }}>
          <div>
            <h1 className="page-title">Alert Queue</h1>
            <p className="page-subtitle">Manage, triage, and investigate security incidents.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
              <Filter size={16} /> Filters <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="glass-panel" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-hover)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>ID</th>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Severity</th>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Source Component</th>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Target/Threat</th>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Status</th>
                <th style={{ padding: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {alertsData.map((alert) => (
                <tr 
                  key={alert.id} 
                  onClick={() => setSelectedAlert(alert)}
                  style={{ 
                    borderBottom: '1px solid var(--border-color)', 
                    cursor: 'pointer',
                    background: selectedAlert?.id === alert.id ? 'var(--bg-surface-hover)' : 'transparent',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-surface-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = selectedAlert?.id === alert.id ? 'var(--bg-surface-hover)' : 'transparent'}
                >
                  <td style={{ padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{alert.id}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600,
                      background: `${getSeverityColor(alert.severity)}15`, color: getSeverityColor(alert.severity)
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: getSeverityColor(alert.severity) }} />
                      {alert.severity}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>{alert.source}</td>
                  <td style={{ padding: '16px', fontWeight: 500 }}>{alert.target}</td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {alert.status === 'Resolved' && <CheckCircle2 size={16} color="var(--accent-primary)" />}
                      {alert.status === 'Unassigned' && <AlertCircle size={16} color="var(--accent-danger)" />}
                      {alert.status === 'In Progress' && <Clock size={16} color="var(--accent-warning)" />}
                      {alert.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', color: 'var(--text-muted)' }}>{alert.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Drawer (Side panel) */}
      {selectedAlert && (
        <div className="glass-panel" style={{ 
          width: '400px', 
          display: 'flex', flexDirection: 'column',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Violation Detail</h2>
            <button onClick={() => setSelectedAlert(null)} style={{ color: 'var(--text-muted)' }}>✕</button>
          </div>
          <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>Incident ID</p>
                <p className="mono">{selectedAlert.id}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>Severity</p>
                <p style={{ color: getSeverityColor(selectedAlert.severity), fontWeight: 600 }}>{selectedAlert.severity}</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{selectedAlert.target}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Detected anomalous activity originating from {selectedAlert.source}. The payload suggests an active attempt to compromise asset integrity. Immediate investigation recommended.
            </p>

            <div style={{ background: 'var(--bg-base)', borderRadius: 'var(--radius-sm)', padding: '16px', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Raw Payload Extract</h4>
              <code style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', display: 'block', whiteSpace: 'pre-wrap' }}>
                {"{\n  \"timestamp\": \"2023-11-22T10:42:01Z\",\n  \"actor\": \"unknown_hash_8f91\",\n  \"event_type\": \"data_exfil_attempt\"\n}"}
              </code>
            </div>

            <button style={{ 
              width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', 
              background: 'var(--bg-surface-hover)', border: '1px solid var(--border-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
              color: 'var(--text-primary)', marginBottom: '12px', transition: 'all 0.2s'
            }} onMouseOver={e => e.currentTarget.style.background = 'var(--text-primary)'}
               onMouseOut={e => e.currentTarget.style.background = 'var(--bg-surface-hover)'}>
              Assign to Me
            </button>
            <button style={{ 
              width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', 
              background: 'var(--accent-danger)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Open in Forensic <ExternalLink size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertQueue;
