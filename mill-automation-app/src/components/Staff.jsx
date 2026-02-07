import { UserPlus } from 'lucide-react';

function Staff() {
    const staffMembers = [
        { id: 1, name: 'Khalid Ahmed', role: 'Reception Officer', salary: 'Monthly', rate: '$800', status: 'active' },
        { id: 2, name: 'Omar Hassan', role: 'Processing Operator', salary: 'Daily', rate: '$35', status: 'active' },
        { id: 3, name: 'Nour Salem', role: 'Accountant', salary: 'Monthly', rate: '$900', status: 'active' },
        { id: 4, name: 'Ali Yousef', role: 'Processing Operator', salary: 'Daily', rate: '$35', status: 'active' },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Staff Managemenat</h1>
                <p className="page-subtitle">Manage employees, salaries, and attendance</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
                <button className="btn btn-primary">
                    <UserPlus size={18} />
                    Add Employee
                </button>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Staff Members</h2>
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Salary Type</th>
                                <th>Rate</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffMembers.map(staff => (
                                <tr key={staff.id}>
                                    <td><strong>{staff.name}</strong></td>
                                    <td>{staff.role}</td>
                                    <td>{staff.salary}</td>
                                    <td>{staff.rate}</td>
                                    <td>
                                        <span className="badge badge-success">{staff.status}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px' }}>
                                            View Details
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

export default Staff;
