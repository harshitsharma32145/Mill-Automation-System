import { DollarSign, Droplet, Receipt, Package } from 'lucide-react';

function Accounting({ orders }) {
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Accounting & Payment</h1>
                <p className="page-subtitle">Generate invoices and manage payments</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <DollarSign size={24} />
                        </div>
                    </div>
                    <div className="stat-value">$2,450</div>
                    <div className="stat-label">Cash Collected</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Droplet size={24} />
                        </div>
                    </div>
                    <div className="stat-value">145 L</div>
                    <div className="stat-label">Oil Collected as Fees</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Receipt size={24} />
                        </div>
                    </div>
                    <div className="stat-value">12</div>
                    <div className="stat-label">Invoices Generated</div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Ready for Collection</h2>
                </div>
                <div className="table-container">
                    {orders.filter(o => o.status === 'collection').length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">
                                <Package size={80} />
                            </div>
                            <h3 className="empty-state-title">No orders ready for collection</h3>
                            <p className="empty-state-text">Complete processing to see orders here</p>
                        </div>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patch #</th>
                                    <th>Customer</th>
                                    <th>Quantity Processed</th>
                                    <th>Estimated Oil</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.filter(o => o.status === 'collection').map(order => (
                                    <tr key={order.id}>
                                        <td><strong>{order.patchNumber}</strong></td>
                                        <td>{order.customer}</td>
                                        <td>{order.quantity} KG</td>
                                        <td>~{Math.round(order.quantity * 0.15)} L</td>
                                        <td>
                                            <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                                                Generate Invoice
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                    <h2 className="card-title">Recent Invoices</h2>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice #</th>
                                <th>Customer</th>
                                <th>Oil Produced</th>
                                <th>Payment Method</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.filter(o => o.status === 'completed').map(order => (
                                <tr key={order.id}>
                                    <td><strong>INV-{order.id}</strong></td>
                                    <td>{order.customer}</td>
                                    <td>{Math.round(order.quantity * 0.15)} L</td>
                                    <td><span className="badge badge-info">Cash</span></td>
                                    <td>$65</td>
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

export default Accounting;
