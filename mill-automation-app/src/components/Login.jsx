import { useState } from 'react';
import { Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';
import './Login.css';

/**
 * Login Component
 * 
 * Static credentials:
 * Username: admin
 * Password: admin123
 */

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Static credentials
    const VALID_USERNAME = 'admin';
    const VALID_PASSWORD = 'admin123';

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate a brief loading state for better UX
        setTimeout(() => {
            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                // Store authentication state
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('username', username);
                onLogin();
            } else {
                setError('Invalid username or password');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="login-container">
            {/* Background decorative elements */}
            <div className="login-bg-decoration">
                <div className="olive-branch olive-branch-1"></div>
                <div className="olive-branch olive-branch-2"></div>
                <div className="olive-branch olive-branch-3"></div>
            </div>

            {/* Login Card */}
            <div className="login-card">
                {/* Logo and Header */}
                <div className="login-header">
                    <div className="login-logo">
                        <div className="logo-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C12 2 8 4 8 8C8 10 9 12 12 12C15 12 16 10 16 8C16 4 12 2 12 2Z" fill="currentColor" opacity="0.3" />
                                <path d="M12 12C9 12 6 14 6 17C6 20 8 22 12 22C16 22 18 20 18 17C18 14 15 12 12 12Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h1 className="login-title">Zaytoun</h1>
                    </div>
                    <p className="login-subtitle">Mill Management System</p>
                    <p className="login-description">Sign in to access your dashboard</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="login-form">
                    {/* Error Message */}
                    {error && (
                        <div className="login-error">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Username Field */}
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <div className="input-wrapper">
                            <User className="input-icon" size={20} />
                            <input
                                type="text"
                                id="username"
                                className="form-input"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                autoComplete="username"
                                autoFocus
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <div className="input-wrapper">
                            <Lock className="input-icon" size={20} />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="form-input"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`login-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>

                    {/* Demo Credentials Info */}
                    <div className="demo-credentials">
                        <p className="demo-title">Demo Credentials</p>
                        <div className="demo-info">
                            <div className="demo-item">
                                <span className="demo-label">Username:</span>
                                <code className="demo-value">admin</code>
                            </div>
                            <div className="demo-item">
                                <span className="demo-label">Password:</span>
                                <code className="demo-value">admin123</code>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="login-footer">
                    <p>© 2024 Zaytoun Mill Management. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
