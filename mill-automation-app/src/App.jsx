import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reception from './components/Reception';
import Processing from './components/Processing';
import Accounting from './components/Accounting';
import Inventory from './components/Inventory';
import Staff from './components/Staff';
import Reports from './components/Reports';
import Analytics from './components/Analytics';
import Login from './components/Login';
import { applyTheme, getStoredTheme } from './themes';
import { applyLanguage, getStoredLanguage } from './translations';

// Mock Data
const mockOrders = [
  { id: 1, patchNumber: 'P-2024-001', customer: 'Ahmad Hassan', mobile: '+972-599-123456', village: 'Jenin', quantity: 250, type: 'Normal', status: 'in-queue', date: '2024-02-02 09:30' },
  { id: 2, patchNumber: 'P-2024-002', customer: 'Fatima Ali', mobile: '+972-599-234567', village: 'Nablus', quantity: 180, type: 'Organic', status: 'processing', date: '2024-02-02 10:15' },
  { id: 3, patchNumber: 'P-2024-003', customer: 'Mohammad Yousef', mobile: '+972-599-345678', village: 'Tulkarm', quantity: 320, type: 'Normal', status: 'collection', date: '2024-02-02 11:00' },
  { id: 4, patchNumber: 'P-2024-004', customer: 'Layla Ibrahim', mobile: '+972-599-456789', village: 'Ramallah', quantity: 150, type: 'Normal', status: 'completed', date: '2024-02-02 08:45' },
];

const mockProductionLines = [
  { id: 1, name: 'Line 1', status: 'active', currentOrder: 'P-2024-002', malaxers: [true, true, false, true, false, false] },
  { id: 2, name: 'Line 2', status: 'active', currentOrder: 'P-2024-005', malaxers: [true, false, true, false, false, false] },
  { id: 3, name: 'Line 3', status: 'idle', currentOrder: null, malaxers: [false, false, false, false, false, false] },
];

// Inner component that uses useLocation
function AppContent({ onLogout }) {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState(mockOrders);
  const [productionLines, setProductionLines] = useState(mockProductionLines);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize theme and language on mount
  useEffect(() => {
    const savedTheme = getStoredTheme();
    const savedLang = getStoredLanguage();
    applyTheme(savedTheme);
    applyLanguage(savedLang);
  }, []);

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const stats = {
    totalOrders: orders.length,
    inQueue: orders.filter(o => o.status === 'in-queue').length,
    processing: orders.filter(o => o.status === 'processing').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  return (
    <div className="app-container">
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logout Button */}
      <button
        className="logout-button"
        onClick={onLogout}
        aria-label="Logout"
        title="Logout"
      >
        <LogOut size={20} />
        <span className="logout-text">Logout</span>
      </button>

      {/* Sidebar Overlay for Mobile */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard stats={stats} orders={orders} productionLines={productionLines} />} />
          <Route path="/reception" element={<Reception orders={orders} setOrders={setOrders} showModal={showModal} setShowModal={setShowModal} />} />
          <Route path="/processing" element={<Processing orders={orders} productionLines={productionLines} setProductionLines={setProductionLines} />} />
          <Route path="/accounting" element={<Accounting orders={orders} />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

// Main App component with Router
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show main app if authenticated
  return (
    <Router>
      <AppContent onLogout={handleLogout} />
    </Router>
  );
}

export default App;
