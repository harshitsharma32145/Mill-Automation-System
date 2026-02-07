import { useState } from 'react';
import { Plus, Play, Inbox, X } from 'lucide-react';

function Reception({ orders, setOrders, showModal, setShowModal }) {
    const [formData, setFormData] = useState({
        customer: '',
        mobile: '',
        village: '',
        quantity: '',
        type: 'Normal',
        variety: 'Nabali'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrder = {
            id: orders.length + 1,
            patchNumber: `P-2024-${String(orders.length + 1).padStart(3, '0')}`,
            customer: formData.customer,
            mobile: formData.mobile,
            village: formData.village,
            quantity: parseInt(formData.quantity),
            type: formData.type,
            status: 'in-queue',
            date: new Date().toLocaleString('en-GB')
        };
        setOrders([...orders, newOrder]);
        setShowModal(false);
        setFormData({ customer: '', mobile: '', village: '', quantity: '', type: 'Normal', variety: 'Nabali' });
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Reception & Registration</h1>
                <p className="page-subtitle">Register new customers and create orders</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    <Plus size={18} />
                    New Order
                </button>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Queue</h2>
                    <span className="badge badge-info">{orders.filter(o => o.status === 'in-queue').length} waiting</span>
                </div>
                <div className="queue-timeline">
                    {orders.filter(o => o.status === 'in-queue').length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">
                                <Inbox size={80} />
                            </div>
                            <h3 className="empty-state-title">No orders in queue</h3>
                            <p className="empty-state-text">Create a new order to get started</p>
                        </div>
                    ) : (
                        orders.filter(o => o.status === 'in-queue').map((order, idx) => (
                            <div key={order.id} className="queue-item">
                                <div className="queue-number">#{idx + 1}</div>
                                <div className="queue-info">
                                    <div className="queue-customer">{order.customer}</div>
                                    <div className="queue-details">
                                        {order.patchNumber} • {order.quantity} KG • {order.village} • {order.date}
                                    </div>
                                </div>
                                <div className="queue-actions">
                                    <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                                        <Play size={16} />
                                        Process
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title">New Order</h2>
                            <button className="modal-close" onClick={() => setShowModal(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Customer Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.customer}
                                    onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Mobile</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Village/City</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={formData.village}
                                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Quantity (KG)</label>
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Processing Type</label>
                                    <select
                                        className="form-select"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option>Normal</option>
                                        <option>Organic</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Olive Variety</label>
                                <select
                                    className="form-select"
                                    value={formData.variety}
                                    onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                                >
                                    <option>Nabali</option>
                                    <option>Baladi</option>
                                    <option>Nabali-Baladi</option>
                                    <option>Nabali-Improved</option>
                                    <option>K18</option>
                                    <option>Italian</option>
                                    <option>Mix</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                                    Create Order
                                </button>
                                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reception;
