/**
 * EXAMPLE: Alternative Ways to Mount GoogleTranslate Component
 * 
 * This file shows different integration patterns for the GoogleTranslate component.
 * Choose the one that best fits your app structure.
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import GoogleTranslate from './components/GoogleTranslate';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
// ... other imports

// ============================================
// OPTION 1: In Sidebar Header (CURRENT IMPLEMENTATION)
// ============================================
// Already implemented in Sidebar.jsx
// Best for: Apps with persistent sidebar navigation


// ============================================
// OPTION 2: In a Dedicated Header Component
// ============================================
function Header() {
    return (
        <header className="app-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
        }}>
            <div className="header-left">
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Zaytoun Mill Management</h1>
            </div>
            <div className="header-right" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <GoogleTranslate />
                {/* Add other header items like user menu, notifications, etc. */}
            </div>
        </header>
    );
}


// ============================================
// OPTION 3: In App.jsx at Root Level
// ============================================
function AppWithHeaderTranslate() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="app-body" style={{ display: 'flex' }}>
                    <Sidebar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* ... other routes */}
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}


// ============================================
// OPTION 4: Floating Button (Bottom Right)
// ============================================
function FloatingTranslate() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
        }}>
            {isOpen ? (
                <div style={{
                    backgroundColor: 'white',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                    }}>
                        <span style={{ fontWeight: 'bold' }}>Translate</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <GoogleTranslate />
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--olive-dark)',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                    title="Translate"
                >
                    🌐
                </button>
            )}
        </div>
    );
}

function AppWithFloatingTranslate() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        {/* ... routes */}
                    </Routes>
                </main>
                <FloatingTranslate />
            </div>
        </Router>
    );
}


// ============================================
// OPTION 5: In Navigation Bar
// ============================================
function NavigationBar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--olive-dark)',
            color: 'white',
        }}>
            <div className="nav-brand">
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Zaytoun</span>
            </div>

            <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
                <a href="/reception" style={{ color: 'white', textDecoration: 'none' }}>Reception</a>
                <a href="/processing" style={{ color: 'white', textDecoration: 'none' }}>Processing</a>
            </div>

            <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <GoogleTranslate />
                <button style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: 'var(--gold)',
                    color: 'var(--olive-dark)',
                    cursor: 'pointer',
                }}>
                    Profile
                </button>
            </div>
        </nav>
    );
}


// ============================================
// OPTION 6: Modal/Dropdown Menu
// ============================================
function SettingsMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-secondary)',
                    cursor: 'pointer',
                }}
            >
                ⚙️ Settings
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    padding: '1rem',
                    minWidth: '250px',
                    zIndex: 1000,
                }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0' }}>Language</h4>
                        <GoogleTranslate />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0' }}>Theme</h4>
                        <select style={{ width: '100%', padding: '0.5rem' }}>
                            <option>Light</option>
                            <option>Dark</option>
                            <option>Auto</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: 'var(--olive-dark)',
                            color: 'white',
                            cursor: 'pointer',
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}


// ============================================
// OPTION 7: Inline in Page Content
// ============================================
function DashboardWithTranslate() {
    return (
        <div className="dashboard-page">
            <div className="page-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
            }}>
                <div>
                    <h1>Dashboard</h1>
                    <p>Real-time overview of mill operations</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <GoogleTranslate />
                    <button>Export Report</button>
                </div>
            </div>

            {/* Dashboard content */}
            <div className="dashboard-content">
                {/* ... */}
            </div>
        </div>
    );
}


// ============================================
// USAGE RECOMMENDATION
// ============================================

/**
 * RECOMMENDED APPROACH:
 * 
 * For the Mill Automation System, the CURRENT implementation (Option 1)
 * in the Sidebar is ideal because:
 * 
 * 1. ✅ Always visible and accessible
 * 2. ✅ Doesn't clutter the main content area
 * 3. ✅ Consistent with the existing language switcher
 * 4. ✅ Works well on mobile (sidebar is toggleable)
 * 5. ✅ Maintains clean separation of concerns
 * 
 * ALTERNATIVE OPTIONS:
 * 
 * - Option 2 (Header): Good for apps without sidebar
 * - Option 4 (Floating): Good for minimal UI interference
 * - Option 5 (Navbar): Good for horizontal navigation layouts
 * - Option 6 (Settings): Good for advanced settings panels
 * 
 * Choose based on your specific UI/UX requirements!
 */

export {
    Header,
    FloatingTranslate,
    NavigationBar,
    SettingsMenu,
    DashboardWithTranslate,
};
