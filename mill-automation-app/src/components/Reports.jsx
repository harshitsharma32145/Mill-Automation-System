import { TrendingUp, Percent, Clock, Calendar, DollarSign, Package, Users, BarChart, UserCheck } from 'lucide-react';

function Reports() {
    const reports = [
        { title: 'Daily Production', icon: Calendar, desc: 'View daily production metrics' },
        { title: 'Financial Summary', icon: DollarSign, desc: 'Revenue and expenses report' },
        { title: 'Inventory Status', icon: Package, desc: 'Stock levels and usage' },
        { title: 'Customer Analytics', icon: Users, desc: 'Customer insights and trends' },
        { title: 'Performance Metrics', icon: BarChart, desc: 'Efficiency and yield analysis' },
        { title: 'Staff Report', icon: UserCheck, desc: 'Attendance and payroll' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Reports & Analytics</h1>
                <p className="page-subtitle">View production, financial, and inventory reports</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                    <div className="stat-value">1,250 KG</div>
                    <div className="stat-label">Total Processed Today</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Percent size={24} />
                        </div>
                    </div>
                    <div className="stat-value">14.8%</div>
                    <div className="stat-label">Average Oil Yield</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Clock size={24} />
                        </div>
                    </div>
                    <div className="stat-value">42 min</div>
                    <div className="stat-label">Avg Processing Time</div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Available Reports</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '20px' }}>
                    {reports.map((report, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: 'var(--white)',
                                padding: '20px',
                                borderRadius: '12px',
                                border: '2px solid var(--olive-pale)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ marginBottom: '12px' }}>
                                <report.icon size={32} style={{ color: 'var(--olive-medium)' }} />
                            </div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: 'var(--olive-dark)' }}>
                                {report.title}
                            </h3>
                            <p style={{ fontSize: '13px', color: 'var(--olive-medium)', marginBottom: '16px' }}>
                                {report.desc}
                            </p>
                            <button className="btn btn-outline" style={{ width: '100%', padding: '8px' }}>
                                Generate
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reports;
