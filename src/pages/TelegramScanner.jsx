import React from 'react';
import { Search, Bot, Database, Zap, RefreshCw, Layers } from 'lucide-react';

const TelegramScanner = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Telegram Channel Scanner</h1>
          <p className="page-subtitle">Real-time keyword tracking and sentiment analysis on monitored networks.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', padding: '0 16px', borderRadius: 'var(--radius-full)' }}>
            <Search size={16} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Query logs..." 
              style={{ background: 'transparent', border: 'none', color: '#fff', padding: '10px', width: '200px', outline: 'none' }} 
            />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', overflow: 'hidden' }}>
        
        {/* Main Feed */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: 'var(--shadow-neon)' }} />
              Live Feed
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Last synced: Just now</span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { author: 'DarkNet_Oracle', group: 'Exploit Devs 0day', content: 'Selling fresh RDP configs for EU targets. Verified. DM for escrow link.', highlight: 'RDP configs', severity: 'high', time: '14:20:05' },
              { author: 'Anon_992', group: 'SecNews_Public', content: 'Did anyone see the latest patch notes from Microsoft? Looks like they patched the spler vulnerability.', highlight: null, severity: 'low', time: '14:18:12' },
              { author: 'K_Zero', group: 'Carding Hub RU', content: 'Looking for fullz with high limits. Will pay 20% on successful drops.', highlight: 'fullz', severity: 'critical', time: '14:15:33' },
              { author: 'SysBot', group: 'Botnet Command Center', content: 'Deployment successful on +300 nodes across AWS-EAST-1.', highlight: 'Botnet Command Center', severity: 'critical', time: '14:10:00' },
            ].map((msg, i) => (
              <div key={i} style={{ 
                background: 'var(--bg-base)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                borderLeft: `3px solid ${msg.severity === 'critical' ? 'var(--accent-warning)' : msg.severity === 'high' ? 'var(--accent-danger)' : 'var(--text-muted)'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>@{msg.author}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>in</span>
                    <span style={{ background: 'var(--bg-surface-hover)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{msg.group}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{msg.time}</span>
                </div>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {msg.content.split(msg.highlight).map((part, index, arr) => 
                     index < arr.length - 1 
                      ? <React.Fragment key={index}>{part}<span style={{ background: 'rgba(255, 51, 102, 0.2)', color: 'var(--accent-danger)', padding: '0 4px', borderRadius: '2px' }}>{msg.highlight}</span></React.Fragment> 
                      : part
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
          
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Scanner Status</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><RefreshCw size={16} color="var(--accent-primary)" /> API Sync</span>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>Active</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Layers size={16} color="var(--text-secondary)" /> Queue Size</span>
                <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Bot size={16} color="var(--text-secondary)" /> NLP Engine</span>
                <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>V2.1 Online</span>
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '20px', flex: 1 }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Keywords</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { tag: '0day', count: 42 },
                { tag: 'exploit', count: 38 },
                { tag: 'ransomware', count: 25 },
                { tag: 'botnet', count: 19 },
                { tag: 'credentials', count: 18 },
                { tag: 'payload', count: 12 },
                { tag: 'bin', count: 10 },
                { tag: 'vulnerability', count: 9 },
              ].map((kw, i) => (
                <div key={i} style={{ 
                  background: `rgba(0, 255, 170, ${kw.count > 20 ? '0.2' : '0.05'})`, 
                  border: `1px solid ${kw.count > 20 ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                  padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem',
                  display: 'flex', gap: '6px', cursor: 'pointer'
                }}>
                  <span style={{ color: 'var(--text-primary)' }}>{kw.tag}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{kw.count}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TelegramScanner;
