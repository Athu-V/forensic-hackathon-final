import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  Settings
} from 'lucide-react';

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
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} color="var(--text-secondary)" />
        <input type="text" placeholder="Search incidents, IP, terms..." />
      </div>
      <div className="topbar-actions">
        <button className="action-btn">
          <Bell size={22} />
          <span className="notification-badge animate-pulse-slow"></span>
        </button>
        <button className="action-btn">
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
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="page-wrapper">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
