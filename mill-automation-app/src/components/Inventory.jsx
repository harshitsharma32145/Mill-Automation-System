import { Droplet, Package, Box, Plus } from 'lucide-react';

function Inventory() {
    const inventoryItems = [
        { id: 1, name: 'Oil Storage', quantity: 2450, unit: 'Liters', category: 'Oil', status: 'good' },
        { id: 2, name: '16L Cans', quantity: 85, unit: 'Units', category: 'Containers', status: 'low' },
        { id: 3, name: 'Gallons', quantity: 124, unit: 'Units', category: 'Containers', status: 'good' },
        { id: 4, name: 'Spare Parts', quantity: 15, unit: 'Items', category: 'Maintenance', status: 'good' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Inventory Management</h1>
                <p className="page-subtitle">Track oil storage, containers, and supplies</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Droplet size={24} />
                        </div>
                    </div>
                    <div className="stat-value">2,450 L</div>
                    <div className="stat-label">Oil in Storage</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Package size={24} />
                        </div>
                    </div>
                    <div className="stat-value">85</div>
                    <div className="stat-label">16L Cans Available</div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <div className="stat-icon">
                            <Box size={24} />
                        </div>
                    </div>
                    <div className="stat-value">124</div>
                    <div className="stat-label">Gallons Available</div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Inventory Items</h2>
                    <button className="btn btn-primary">
                        <Plus size={18} />
                        Add Item
                    </button>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryItems.map(item => (
                                <tr key={item.id}>
                                    <td><strong>{item.name}</strong></td>
                                    <td>{item.category}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unit}</td>
                                    <td>
                                        <span className={`badge badge-${item.status === 'low' ? 'warning' : 'success'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Inventory;
