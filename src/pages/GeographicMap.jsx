import React from 'react';
import { Map as MapIcon, Crosshair, MapPin, Layers, ZoomIn, ZoomOut, Filter } from 'lucide-react';
import { useToast } from '../components/Layout';

const ThreatMarker = ({ x, y, size, ripple, onClick }) => (
  <g style={{ cursor: 'pointer' }} onClick={onClick}>
    {ripple && (
      <circle cx={x} cy={y} r={size * 2} fill="var(--accent-danger)" opacity="0.2">
        <animate attributeName="r" from={size} to={size * 3} dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    )}
    <circle cx={x} cy={y} r={size} fill="var(--accent-danger)" />
  </g>
);

const GeographicMap = () => {
  const { showToast } = useToast();

  return (
    <div className="map-page" style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Geographic Heat Map</h1>
          <p className="page-subtitle">Global threat distribution and physical asset monitoring.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="glass-panel" style={{ padding: '4px', display: 'flex', gap: '4px' }}>
            <button 
              onClick={() => showToast('Switching map layers...', 'success')}
              style={{ padding: '8px', background: 'var(--bg-surface-hover)', borderRadius: '4px' }}
            >
              <Layers size={18} />
            </button>
            <button 
              onClick={() => showToast('Recenter on global threats', 'success')}
              style={{ padding: '8px' }}
            >
              <Crosshair size={18} />
            </button>
          </div>
          <button 
            onClick={() => showToast('Opening severity filter...', 'success')}
            className="glass-panel" 
            style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}
          >
            <Filter size={16} /> Filter by Severity
          </button>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }} className="glass-panel">
        {/* Mock Map Background (Stylized World Map SVG) */}
        <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', background: '#080C14' }}>
          <path 
            d="M200,150 Q250,100 300,150 T400,120 T500,180 T600,140 T750,200 T850,150 T950,250 T800,400 T600,350 T400,450 T200,350 Z" 
            fill="var(--bg-surface)" 
            stroke="var(--border-color)" 
            strokeWidth="1"
          />
          {/* Mock Grid Lines */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            {[...Array(10)].map((_, i) => <line key={i} x1={i*100} y1="0" x2={i*100} y2="500" />)}
            {[...Array(5)].map((_, i) => <line key={i} x1="0" y1={i*100} x2="1000" y2={i*100} />)}
          </g>
          
          {/* Threat Markers */}
          <ThreatMarker x={320} y={180} size={6} ripple={true} onClick={() => showToast('Investigating threat at lat: 34.0, long: -118.2', 'success')} />
          <ThreatMarker x={750} y={240} size={4} ripple={false} onClick={() => showToast('Checking node health in EU region...', 'success')} />
          <ThreatMarker x={600} y={320} size={8} ripple={true} onClick={() => showToast('Critical breach detected in server cluster #9', 'success')} />
          <ThreatMarker x={450} y={150} size={3} ripple={false} onClick={() => showToast('Low-level anomaly detected', 'success')} />
          <ThreatMarker x={880} y={380} size={5} ripple={true} onClick={() => showToast('Suspicious traffic originating from proxy hub', 'success')} />
        </svg>

        {/* Map Controls */}
        <div style={{ position: 'absolute', bottom: '24px', right: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => showToast('Zoom In', 'success')} className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ZoomIn size={20} /></button>
          <button onClick={() => showToast('Zoom Out', 'success')} className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ZoomOut size={20} /></button>
        </div>

        {/* Legend */}
        <div style={{ position: 'absolute', top: '24px', left: '24px', padding: '16px' }} className="glass-panel">
          <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: 600 }}>THREAT LEVELS</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-danger)' }} /> Critical Alert
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-warning)' }} /> Potential Breach
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-primary)' }} /> Secure Asset
            </div>
          </div>
        </div>

        {/* HUD Elements */}
        <div style={{ position: 'absolute', bottom: '24px', left: '24px', padding: '12px 20px', borderRadius: 'var(--radius-full)' }} className="glass-panel animate-pulse-slow">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>LIVE SCANNING: 1,204 NODES ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default GeographicMap;

