import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    ClipboardList,
    Settings,
    Receipt,
    Package,
    Users,
    BarChart3,
    TrendingUp,
    Palette,
    Languages
} from 'lucide-react';
import { themes, applyTheme, getStoredTheme } from '../themes';
import { translations, applyLanguage, getStoredLanguage, useTranslation } from '../translations';
import GoogleTranslate from './GoogleTranslate';

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    const [currentTheme, setCurrentTheme] = useState(getStoredTheme());
    const [currentLang, setCurrentLang] = useState(getStoredLanguage());
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);

    const t = useTranslation(currentLang);

    // Close sidebar when route changes (mobile)
    useEffect(() => {
        if (onClose) {
            onClose();
        }
    }, [location.pathname, onClose]);

    const navSections = [
        {
            title: t.mainSection,
            items: [
                { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard, path: '/dashboard' },
                { id: 'reception', label: t.reception, icon: ClipboardList, path: '/reception' },
                { id: 'processing', label: t.processing, icon: Settings, path: '/processing' },
                { id: 'accounting', label: t.accounting, icon: Receipt, path: '/accounting' },
            ]
        },
        {
            title: t.managementSection,
            items: [
                { id: 'inventory', label: t.inventory, icon: Package, path: '/inventory' },
                { id: 'staff', label: t.staff, icon: Users, path: '/staff' },
                { id: 'reports', label: t.reports, icon: BarChart3, path: '/reports' },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp, path: '/analytics' },
            ]
        }
    ];

    const handleThemeChange = (themeName) => {
        applyTheme(themeName);
        setCurrentTheme(themeName);
        setShowThemeMenu(false);
    };

    const handleLanguageChange = (lang) => {
        applyLanguage(lang);
        setCurrentLang(lang);
        setShowLangMenu(false);
        // Reload to apply RTL changes properly
        window.location.reload();
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo">{t.logo}</div>
                <div className="logo-subtitle">{t.logoSubtitle}</div>
                <div style={{ marginTop: '12px' }}>
                    <GoogleTranslate />
                </div>
            </div>

            {navSections.map(section => (
                <div key={section.title} className="nav-section">
                    <div className="nav-section-title">{section.title}</div>
                    {section.items.map(item => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <item.icon className="nav-icon" size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            ))}

            {/* Appearance Section */}
            <div className="nav-section">
                <div className="nav-section-title">{t.appearanceSection}</div>

                {/* Theme Switcher */}
                <div
                    className="nav-item"
                    onClick={() => {
                        setShowThemeMenu(!showThemeMenu);
                        setShowLangMenu(false);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <Palette className="nav-icon" size={20} />
                    <span>{t.theme}</span>
                </div>

                {showThemeMenu && (
                    <div className="theme-menu">
                        {Object.entries(themes).map(([key, theme]) => (
                            <div
                                key={key}
                                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                                onClick={() => handleThemeChange(key)}
                            >
                                <div className="theme-preview">
                                    <div
                                        className="theme-color"
                                        style={{ background: theme.colors['--olive-dark'] }}
                                    ></div>
                                    <div
                                        className="theme-color"
                                        style={{ background: theme.colors['--olive-medium'] }}
                                    ></div>
                                    <div
                                        className="theme-color"
                                        style={{ background: theme.colors['--gold'] }}
                                    ></div>
                                </div>
                                <span className="theme-name">{theme.name}</span>
                                {currentTheme === key && <span className="theme-check">✓</span>}
                            </div>
                        ))}
                    </div>
                )}

                {/* Language Switcher */}
                <div
                    className="nav-item"
                    onClick={() => {
                        setShowLangMenu(!showLangMenu);
                        setShowThemeMenu(false);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <Languages className="nav-icon" size={20} />
                    <span>{t.language}</span>
                </div>

                {showLangMenu && (
                    <div className="theme-menu">
                        {Object.entries(translations).map(([key, lang]) => (
                            <div
                                key={key}
                                className={`theme-option ${currentLang === key ? 'active' : ''}`}
                                onClick={() => handleLanguageChange(key)}
                            >
                                <span className="lang-flag">{key === 'en' ? '🇬🇧' : key === 'hi' ? '🇮🇳' : '🇸🇦'}</span>
                                <span className="theme-name">{lang.name}</span>
                                {currentLang === key && <span className="theme-check">✓</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;
