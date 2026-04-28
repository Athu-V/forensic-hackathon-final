import React, { createContext, useContext, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  AlertTriangle, 
  Database, 
  MessageSquare, 
  Map, 
  Search, 
  FileText,
  Bell,
  Settings,
  X,
  CheckCircle2
} from 'lucide-react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const Toast = ({ message, type, onClose }) => (
  <div className={`toast-notification ${type}`} style={{
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: 'var(--bg-surface)',
    borderLeft: `4px solid ${type === 'success' ? 'var(--accent-primary)' : 'var(--accent-danger)'}`,
    padding: '16px 20px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    zIndex: 1000,
    animation: 'slideInRight 0.3s ease-out'
  }}>
    <CheckCircle2 size={20} color="var(--accent-primary)" />
    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{message}</span>
    <button onClick={onClose} style={{ marginLeft: '12px', color: 'var(--text-muted)' }}>
      <X size={16} />
    </button>
  </div>
);

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Main Dashboard' },
    { path: '/alerts', icon: AlertTriangle, label: 'Alert Queue' },
    { path: '/ingestion', icon: Database, label: 'Asset Ingestion' },
    { path: '/telegram', icon: MessageSquare, label: 'Telegram Scanner' },
    { path: '/map', icon: Map, label: 'Heat Map' },
    { path: '/forensics', icon: Search, label: 'Forensic Analysis' },
    { path: '/reports', icon: FileText, label: 'Reports & Exports' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <ShieldAlert className="text-gradient" size={28} />
          <span className="text-gradient">NEXUS S.I.</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            to={item.path} 
            key={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

const Topbar = () => {
  const { showToast } = useToast();

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} color="var(--text-secondary)" />
        <input type="text" placeholder="Search incidents, IP, terms..." />
      </div>
      <div className="topbar-actions">
        <button className="action-btn" onClick={() => showToast('No new notifications', 'success')}>
          <Bell size={22} />
          <span className="notification-badge animate-pulse-slow"></span>
        </button>
        <button className="action-btn" onClick={() => showToast('Settings panel opening...', 'success')}>
          <Settings size={22} />
        </button>
        <div className="user-profile">
          <div className="avatar">A</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Admin User</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Security Level 4</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const Layout = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <main className="page-wrapper">
            {children}
          </main>
        </div>
        {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      </div>
    </ToastContext.Provider>
  );
};

export default Layout;

