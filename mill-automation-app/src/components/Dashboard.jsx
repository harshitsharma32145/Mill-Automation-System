import { ClipboardList, Clock, Settings as SettingsIcon, CheckCircle } from 'lucide-react';
import { useTranslation, getStoredLanguage } from '../translations';

function Dashboard({ stats, orders, productionLines }) {
    const t = useTranslation(getStoredLanguage());

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">{t.dashboardTitle}</h1>
                <p className="page-subtitle">{t.dashboardSubtitle}</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <ClipboardList size={24} />
                        </div>
                        <span className="stat-change positive">+12%</span>
                    </div>
                    <div className="stat-value">{stats.totalOrders}</div>
                    <div className="stat-label">{t.totalOrdersToday}</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Clock size={24} />
                        </div>
                        <span className="stat-change positive">{t.active}</span>
                    </div>
                    <div className="stat-value">{stats.inQueue}</div>
                    <div className="stat-label">{t.inQueue}</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <SettingsIcon size={24} />
                        </div>
                        <span className="stat-change positive">{t.processing_}</span>
                    </div>
                    <div className="stat-value">{stats.processing}</div>
                    <div className="stat-label">{t.currentlyProcessing}</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <CheckCircle size={24} />
                        </div>
                        <span className="stat-change positive">+8%</span>
                    </div>
                    <div className="stat-value">{stats.completed}</div>
                    <div className="stat-label">{t.completedToday}</div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{t.productionLinesStatus}</h2>
                </div>
                <div className="production-lines">
                    {productionLines.map(line => (
                        <div key={line.id} className={`production-line ${line.status}`}>
                            <div className="line-header">
                                <span className="line-name">{line.name}</span>
                                <div className={`line-status-indicator ${line.status}`}></div>
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--olive-medium)', marginBottom: '12px' }}>
                                {line.currentOrder ? `${t.processing_}: ${line.currentOrder}` : t.available}
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: 'var(--olive-dark)' }}>
                                {t.malaxers}:
                            </div>
                            <div className="malaxers">
                                {line.malaxers.map((inUse, idx) => (
                                    <div key={idx} className={`malaxer ${inUse ? 'in-use' : 'available'}`}>
                                        {idx + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                    <h2 className="card-title">{t.recentOrders}</h2>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>{t.patchNumber}</th>
                                <th>{t.customer}</th>
                                <th>{t.village}</th>
                                <th>{t.quantityKg}</th>
                                <th>{t.status}</th>
                                <th>{t.time}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td><strong>{order.patchNumber}</strong></td>
                                    <td>{order.customer}</td>
                                    <td>{order.village}</td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        <span className={`badge badge-${order.status === 'completed' ? 'success' :
                                            order.status === 'processing' ? 'warning' :
                                                order.status === 'collection' ? 'info' : 'danger'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
