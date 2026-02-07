# Mill Automation System - Olive Oil Production Management

A comprehensive React application for managing olive oil mill operations, including order reception, production line management, accounting, inventory, staff management, and reporting.

## Features

### 🎯 Core Modules

1. **Dashboard**
   - Real-time overview of mill operations
   - Statistics cards showing total orders, queue status, processing, and completed orders
   - Production lines status with malaxer unit visualization
   - Recent orders table

2. **Reception & Registration**
   - Customer registration and order creation
   - Queue management system
   - Order form with customer details, quantity, processing type, and olive variety
   - Visual queue timeline

3. **Processing**
   - Production line management (3 lines with 6 malaxer units each)
   - Real-time status of each production line
   - Malaxer unit availability tracking
   - Currently processing orders with progress bars

4. **Accounting & Payment**
   - Cash and oil collection tracking
   - Invoice generation
   - Ready for collection orders
   - Recent invoices history

5. **Inventory Management**
   - Oil storage tracking
   - Container management (16L cans, gallons)
   - Spare parts inventory
   - Stock level monitoring

6. **Staff Management**
   - Employee records
   - Salary management (monthly/daily rates)
   - Staff status tracking

7. **Reports & Analytics**
   - Production metrics
   - Oil yield analysis
   - Processing time statistics
   - Multiple report types (Daily Production, Financial Summary, Customer Analytics, etc.)

## Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing and navigation
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with custom properties and animations

## Routing

The application uses React Router for navigation with the following routes:

- `/` - Redirects to `/dashboard`
- `/dashboard` - Main dashboard view
- `/reception` - Order reception and queue management
- `/processing` - Production line management
- `/accounting` - Invoices and payments
- `/inventory` - Stock and inventory management
- `/staff` - Employee management
- `/reports` - Analytics and reports
- `*` - Any other route redirects to `/dashboard`

Navigation is handled through the sidebar using `NavLink` components that automatically highlight the active route.

## Design Features

- 🎨 **Premium Design** - Modern olive-themed color palette
- ✨ **Smooth Animations** - Fade-in, slide-up, and pulse effects
- 📱 **Responsive** - Mobile-friendly layout
- 🌍 **RTL Support** - Ready for Arabic/RTL languages
- 🎭 **Interactive UI** - Hover effects and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mill-automation-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
mill-automation-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Reception.jsx
│   │   ├── Processing.jsx
│   │   ├── Accounting.jsx
│   │   ├── Inventory.jsx
│   │   ├── Staff.jsx
│   │   └── Reports.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Color Palette

- **Olive Dark**: `#2C3E2D`
- **Olive Medium**: `#4A6741`
- **Olive Light**: `#8BA888`
- **Olive Pale**: `#D4E5D2`
- **Gold**: `#C9A961`
- **Gold Light**: `#E5D19E`
- **Cream**: `#F7F4ED`

## Future Enhancements

- [ ] Backend API integration
- [ ] Real-time data updates with WebSockets
- [ ] User authentication and authorization
- [ ] Multi-language support (English/Arabic)
- [ ] PDF invoice generation
- [ ] Advanced reporting with charts
- [ ] Mobile app version
- [ ] Database integration
- [ ] Print functionality for invoices

## License

This project is created for olive oil mill management purposes.

## Author

Converted from HTML to React application structure.
