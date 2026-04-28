import React from 'react';
import { Search, Cpu, FileText, Share2, Terminal, Code, Bug, Fingerprint } from 'lucide-react';
import { useToast } from '../components/Layout';

const ForensicAnalysis = () => {
  const { showToast } = useToast();

  return (
    <div className="forensics-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Forensic Analysis Engine</h1>
          <p className="page-subtitle">Deep investigative tools for pattern matching and payload analysis.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => showToast('Initializing deep signature scan... Checking 42k patterns.', 'success')}
            style={{ 
              background: 'var(--accent-secondary)', color: 'var(--bg-base)', 
              padding: '10px 24px', borderRadius: 'var(--radius-sm)', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Fingerprint size={18} /> Run Signature Scan
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Analysis Workspace */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                    <input 
                        type="text" 
                        placeholder="Search for footprints, hashes, or identifiers..." 
                        style={{ 
                            width: '100%', padding: '12px 12px 12px 40px', background: 'var(--bg-surface-hover)', 
                            border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', color: 'white',
                            outline: 'none'
                        }}
                    />
                </div>
                <button onClick={() => showToast('Advanced filtering options loaded', 'success')} className="glass-panel" style={{ padding: '0 20px' }}>Advanced Filter</button>
            </div>

            <div style={{ position: 'relative', height: '400px', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', padding: '20px', overflow: 'hidden' }}>
              <div style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '16px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--accent-primary)' }}>LOG_STREAM::THREAD_ID_7701</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="mono">
                  {['> INIT SCAN SEQUENCE', '> LOADING PAYLOAD: /0x44A1', '> PATTERN MATCH FOUND: [S-012]', '> TRACING ORIGIN...', '> IP: 192.168.1.104 (MASKED)', '> REDIRECTING ENCRYPTED TUNNEL'].map((line, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: i > 2 ? 'var(--accent-warning)' : 'var(--text-secondary)' }}>
                        {line}
                    </div>
                  ))}
                  <div className="animate-pulse-slow" style={{ color: 'var(--accent-primary)' }}>_</div>
                </div>
              </div>

              {/* Mock Graph Visualization Overlay */}
              <div style={{ position: 'absolute', top: '100px', right: '100px', width: '200px', height: '200px', opacity: 0.4 }}>
                 {/* Connection nodes */}
                 <div style={{ position: 'absolute', top: '50%', left: '50%', width: '12px', height: '12px', background: 'var(--accent-secondary)', borderRadius: '50%' }} />
                 <div style={{ position: 'absolute', top: '20%', left: '30%', width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }} />
                 <div style={{ position: 'absolute', top: '80%', left: '70%', width: '8px', height: '8px', background: 'var(--accent-danger)', borderRadius: '50%' }} />
                 <svg style={{ width: '100%', height: '100%' }}>
                    <line x1="50%" y1="50%" x2="30%" y2="20%" stroke="var(--border-color)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="var(--border-color)" strokeWidth="1" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Analysis Tools Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
             {[
               { title: 'Payload Unpacker', icon: Cpu, count: '128 Files' },
               { title: 'Metadata Extractor', icon: FileText, count: '4k Entries' },
               { title: 'Relation Graph', icon: Share2, count: 'Active' },
             ].map((tool, i) => (
               <div key={i} 
                onClick={() => showToast(`Launching ${tool.title}...`, 'success')}
                className="glass-panel" 
                style={{ padding: '20px', display: 'flex', gap: '16px', cursor: 'pointer' }}
               >
                 <div style={{ color: 'var(--accent-secondary)' }}><tool.icon size={24} /></div>
                 <div>
                    <h5 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{tool.title}</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tool.count}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>Investigations</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[
                   { name: 'Operation Silverfish', priority: 'High', date: '25 APR' },
                   { name: 'Target-104 Breach', priority: 'Critical', date: '24 APR' },
                   { name: 'Botnet Alpha Sync', priority: 'Medium', date: '22 APR' },
                   { name: 'Encryption Key Leak', priority: 'High', date: '21 APR' },
                 ].map((inv, i) => (
                   <div key={i} 
                    onClick={() => showToast(`Loading investigation: ${inv.name}`, 'success')}
                    style={{ padding: '12px', background: 'var(--bg-surface-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', cursor: 'pointer' }}
                   >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{inv.name}</span>
                        <span style={{ fontSize: '0.7rem', color: inv.priority === 'Critical' ? 'var(--accent-danger)' : 'var(--text-secondary)' }}>{inv.priority}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last update: {inv.date}</span>
                   </div>
                 ))}
              </div>
              <button 
                onClick={() => showToast('Opening new investigation template...', 'success')}
                style={{ width: '100%', marginTop: '20px', padding: '12px', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                + Start New Investigation
              </button>
           </div>

           <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>System Terminal</h3>
              <div className="mono" style={{ fontSize: '0.75rem', background: '#000', padding: '12px', borderRadius: '4px', height: '150px', overflowY: 'auto', color: '#0f0' }}>
                 <div>$ nexus --analyze --target current</div>
                 <div style={{ color: '#fff' }}>[INFO] Analyzing local buffer...</div>
                 <div style={{ color: '#fff' }}>[WARN] 2 potential leaks found</div>
                 <div>$ _</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ForensicAnalysis;

