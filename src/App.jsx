import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AlertQueue from './pages/AlertQueue';
import TelegramScanner from './pages/TelegramScanner';
import AssetIngestion from './pages/AssetIngestion';
import GeographicMap from './pages/GeographicMap';
import ForensicAnalysis from './pages/ForensicAnalysis';
import ReportExport from './pages/ReportExport';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/alerts" element={<AlertQueue />} />
          <Route path="/ingestion" element={<AssetIngestion />} />
          <Route path="/telegram" element={<TelegramScanner />} />
          <Route path="/map" element={<GeographicMap />} />
          <Route path="/forensics" element={<ForensicAnalysis />} />
          <Route path="/reports" element={<ReportExport />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
