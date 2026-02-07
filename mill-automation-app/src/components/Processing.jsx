import { Settings as SettingsIcon } from 'lucide-react';

function Processing({ orders, productionLines, setProductionLines }) {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Processing</h1>
                <p className="page-subtitle">Manage production lines and malaxer units</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Production Lines</h2>
                </div>
                <div className="production-lines">
                    {productionLines.map(line => (
                        <div key={line.id} className={`production-line ${line.status}`}>
                            <div className="line-header">
                                <span className="line-name">{line.name}</span>
                                <div className={`line-status-indicator ${line.status}`}></div>
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--olive-medium)', marginBottom: '4px' }}>
                                Status: <strong>{line.status === 'active' ? 'Active' : 'Idle'}</strong>
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--olive-medium)', marginBottom: '12px' }}>
                                {line.currentOrder ? `Processing: ${line.currentOrder}` : 'Available for processing'}
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: 'var(--olive-dark)' }}>
                                Malaxer Units (6):
                            </div>
                            <div className="malaxers">
                                {line.malaxers.map((inUse, idx) => (
                                    <div key={idx} className={`malaxer ${inUse ? 'in-use' : 'available'}`}>
                                        M{idx + 1}
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '16px', fontSize: '12px', color: 'var(--olive-medium)' }}>
                                Available: {line.malaxers.filter(m => !m).length}/6 • In Use: {line.malaxers.filter(m => m).length}/6
                            </div>
                            {line.status === 'idle' && (
                                <button className="btn btn-primary" style={{ width: '100%', marginTop: '12px', padding: '10px' }}>
                                    Start Processing
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                    <h2 className="card-title">Currently Processing</h2>
                </div>
                <div className="table-container">
                    {orders.filter(o => o.status === 'processing').length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">
                                <SettingsIcon size={80} />
                            </div>
                            <h3 className="empty-state-title">No orders being processed</h3>
                            <p className="empty-state-text">Start processing orders from the queue</p>
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patch #</th>
                                    <th>Customer</th>
                                    <th>Line</th>
                                    <th>Progress</th>
                                    <th>Time Remaining</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.filter(o => o.status === 'processing').map(order => (
                                    <tr key={order.id}>
                                        <td><strong>{order.patchNumber}</strong></td>
                                        <td>{order.customer}</td>
                                        <td>Line 1</td>
                                        <td>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: '65%' }}></div>
                                            </div>
                                        </td>
                                        <td>18 min</td>
                                        <td>
                                            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                                                Complete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Processing;
