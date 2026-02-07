import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Droplet, Clock, Award } from 'lucide-react';
import { useTranslation, getStoredLanguage } from '../translations';

function Analytics() {
    const t = useTranslation(getStoredLanguage());

    // Sample data for charts
    const productionData = [
        { day: 'Mon', oil: 450, olives: 2200 },
        { day: 'Tue', oil: 520, olives: 2500 },
        { day: 'Wed', oil: 480, olives: 2350 },
        { day: 'Thu', oil: 610, olives: 2900 },
        { day: 'Fri', oil: 590, olives: 2800 },
        { day: 'Sat', oil: 680, olives: 3200 },
        { day: 'Sun', oil: 420, olives: 2100 },
    ];

    const yieldData = [
        { month: 'Jan', yield: 18.5 },
        { month: 'Feb', yield: 19.2 },
        { month: 'Mar', yield: 20.1 },
        { month: 'Apr', yield: 19.8 },
        { month: 'May', yield: 21.3 },
        { month: 'Jun', yield: 20.5 },
    ];

    const oliveTypeData = [
        { name: 'Nabali', value: 45, color: '#4A6741' },
        { name: 'Souri', value: 30, color: '#8BA888' },
        { name: 'Barnea', value: 15, color: '#C9A961' },
        { name: 'Others', value: 10, color: '#D4E5D2' },
    ];

    const revenueData = [
        { week: 'Week 1', revenue: 12500 },
        { week: 'Week 2', revenue: 15200 },
        { week: 'Week 3', revenue: 14800 },
        { week: 'Week 4', revenue: 18900 },
    ];

    const kpiCards = [
        {
            title: 'Total Revenue',
            value: '₪61,400',
            change: '+12.5%',
            trend: 'up',
            icon: DollarSign,
            color: '#4A6741'
        },
        {
            title: 'Oil Produced',
            value: '3,750 L',
            change: '+8.3%',
            trend: 'up',
            icon: Droplet,
            color: '#C9A961'
        },
        {
            title: 'Avg Processing Time',
            value: '2.4 hrs',
            change: '-5.2%',
            trend: 'down',
            icon: Clock,
            color: '#5B8C9F'
        },
        {
            title: 'Quality Score',
            value: '94.5%',
            change: '+2.1%',
            trend: 'up',
            icon: Award,
            color: '#8BA888'
        },
    ];

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Analytics Dashboard</h1>
                <p className="page-subtitle">Real-time insights and performance metrics</p>
            </div>

            {/* KPI Cards */}
            <div className="analytics-kpi-grid">
                {kpiCards.map((kpi, index) => (
                    <div key={index} className="analytics-kpi-card" style={{ borderLeftColor: kpi.color }}>
                        <div className="kpi-header">
                            <div className="kpi-icon" style={{ background: `${kpi.color}15`, color: kpi.color }}>
                                <kpi.icon size={24} />
                            </div>
                            <div className={`kpi-trend ${kpi.trend}`}>
                                {kpi.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                <span>{kpi.change}</span>
                            </div>
                        </div>
                        <div className="kpi-value">{kpi.value}</div>
                        <div className="kpi-title">{kpi.title}</div>
                    </div>
                ))}
            </div>

            {/* Charts Grid */}
            <div className="analytics-charts-grid">
                {/* Production Trend */}
                <div className="analytics-chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Weekly Production Trend</h3>
                        <span className="chart-subtitle">Oil output vs Olive input</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={productionData}>
                            <defs>
                                <linearGradient id="colorOil" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4A6741" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#4A6741" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="colorOlives" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#C9A961" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#C9A961" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                            <XAxis dataKey="day" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{
                                    background: '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="oil"
                                stroke="#4A6741"
                                fillOpacity={1}
                                fill="url(#colorOil)"
                                name="Oil (L)"
                            />
                            <Area
                                type="monotone"
                                dataKey="olives"
                                stroke="#C9A961"
                                fillOpacity={1}
                                fill="url(#colorOlives)"
                                name="Olives (KG)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Oil Yield Trend */}
                <div className="analytics-chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Oil Yield Percentage</h3>
                        <span className="chart-subtitle">Monthly average yield rate</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={yieldData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                            <XAxis dataKey="month" stroke="#666" />
                            <YAxis stroke="#666" domain={[15, 25]} />
                            <Tooltip
                                contentStyle={{
                                    background: '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="yield"
                                stroke="#8BA888"
                                strokeWidth={3}
                                dot={{ fill: '#4A6741', r: 6 }}
                                activeDot={{ r: 8 }}
                                name="Yield %"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Olive Types Distribution */}
                <div className="analytics-chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Olive Varieties Distribution</h3>
                        <span className="chart-subtitle">By processing volume</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={oliveTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {oliveTypeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Revenue Chart */}
                <div className="analytics-chart-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Monthly Revenue</h3>
                        <span className="chart-subtitle">Last 4 weeks performance</span>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
                            <XAxis dataKey="week" stroke="#666" />
                            <YAxis stroke="#666" />
                            <Tooltip
                                contentStyle={{
                                    background: '#fff',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                            <Legend />
                            <Bar
                                dataKey="revenue"
                                fill="#C9A961"
                                radius={[8, 8, 0, 0]}
                                name="Revenue (₪)"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Insights Section */}
            <div className="analytics-insights">
                <h3 className="insights-title">📊 Key Insights</h3>
                <div className="insights-grid">
                    <div className="insight-card success">
                        <div className="insight-icon">✅</div>
                        <div className="insight-content">
                            <h4>Peak Performance</h4>
                            <p>Saturday showed highest production with 680L oil from 3,200kg olives</p>
                        </div>
                    </div>
                    <div className="insight-card warning">
                        <div className="insight-icon">⚠️</div>
                        <div className="insight-content">
                            <h4>Yield Optimization</h4>
                            <p>May achieved best yield at 21.3%. Consider replicating those conditions</p>
                        </div>
                    </div>
                    <div className="insight-card info">
                        <div className="insight-icon">💡</div>
                        <div className="insight-content">
                            <h4>Processing Efficiency</h4>
                            <p>Average processing time reduced by 5.2% this month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
