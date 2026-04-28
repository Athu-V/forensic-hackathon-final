import React from 'react';
import { FileText, Download, Share2, Printer, Trash2, FileCheck, FileArchive, Settings } from 'lucide-react';

const ReportCard = ({ title, type, date, size, author }) => (
  <div className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ padding: '12px', background: 'var(--bg-surface-hover)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
            {type === 'pdf' ? <FileText size={24} /> : <FileArchive size={24} />}
        </div>
        <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{title}</h4>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>{date}</span>
                <span>•</span>
                <span>{size}</span>
                <span>•</span>
                <span>Gen by: {author}</span>
            </div>
        </div>
    </div>
    <div style={{ display: 'flex', gap: '8px' }}>
        <button className="glass-panel" style={{ padding: '8px', color: 'var(--text-secondary)' }}><Share2 size={18} /></button>
        <button className="glass-panel" style={{ padding: '8px', color: 'var(--accent-primary)' }}><Download size={18} /></button>
        <button className="glass-panel" style={{ padding: '8px', color: 'var(--accent-danger)' }}><Trash2 size={18} /></button>
    </div>
</div>
);

const ReportExport = () => {
  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Report & Evidence Export</h1>
          <p className="page-subtitle">Generate court-admissible dossiers and technical incident reports.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ 
            background: 'var(--accent-primary)', color: 'var(--bg-base)', 
            padding: '10px 24px', borderRadius: 'var(--radius-sm)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <FileCheck size={18} /> New Detailed Report
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
         <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--accent-primary)' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Total Reports</h3>
            <span style={{ fontSize: '2rem', fontWeight: 700 }}>42</span>
         </div>
         <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--accent-secondary)' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Evidence Bundles</h3>
            <span style={{ fontSize: '2rem', fontWeight: 700 }}>18</span>
         </div>
         <div className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid var(--accent-warning)' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Pending Export</h3>
            <span style={{ fontSize: '2rem', fontWeight: 700 }}>3</span>
         </div>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-primary)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '4px' }}>Recent Reports</h3>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-muted)' }}>Scheduled</h3>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-muted)' }}>Archive</h3>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
                <button className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                    <Settings size={14} /> Config
                </button>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ReportCard title="Incident_Summary_SRC-8012_v2.pdf" type="pdf" date="25 APR 2026" size="2.4 MB" author="AUTO-SYSTEM" />
            <ReportCard title="Evidence_Bundle_Operation_Silverfish.zip" type="zip" date="24 APR 2026" size="45.8 MB" author="ADMIN_USER" />
            <ReportCard title="Network_Traffic_Forensics_104.pdf" type="pdf" date="22 APR 2026" size="1.1 MB" author="ANALYST_09" />
            <ReportCard title="DarkWeb_Footprint_Report_Group_Y.pdf" type="pdf" date="20 APR 2026" size="5.6 MB" author="AUTO-SYSTEM" />
            <ReportCard title="Telegram_Channel_Audit_Full.zip" type="zip" date="18 APR 2026" size="128.0 MB" author="SYSTEM_CRON" />
        </div>
      </div>
    </div>
  );
};

export default ReportExport;
