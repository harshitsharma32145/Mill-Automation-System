# 🫒 Mill Automation System - Olive Oil Production Management

A comprehensive, production-ready React application for managing olive oil mill operations. This system streamlines the entire production workflow from customer reception to final accounting, with real-time tracking, multi-language support, and mobile-responsive design.

![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Core Modules](#-core-modules)
- [Configuration](#-configuration)
- [Development](#-development)
- [Production Build](#-production-build)
- [Internationalization](#-internationalization)
- [PWA Support](#-pwa-support)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎯 Core Functionality

- **📊 Real-time Dashboard** - Live overview of mill operations with statistics and production metrics
- **📝 Order Management** - Complete customer registration and order tracking system
- **⚙️ Production Line Control** - Manage 3 production lines with 18 malaxer units
- **💰 Accounting & Invoicing** - Automated invoice generation with PDF export
- **📦 Inventory Management** - Track oil storage, containers, and spare parts
- **👥 Staff Management** - Employee records, attendance, and salary tracking
- **📈 Reports & Analytics** - Comprehensive reporting with data visualization
- **🔐 Authentication** - Secure login system with role-based access control

### 🌟 Advanced Features

- **🌍 Multi-language Support** - English, Hindi, and Arabic with Google Translate integration
- **📱 Progressive Web App (PWA)** - Install on mobile devices, works offline
- **🎨 Premium UI/UX** - Modern olive-themed design with smooth animations
- **🔄 Real-time Updates** - Live production status and queue management
- **📄 PDF Generation** - Professional invoice and report generation
- **📷 QR Code Support** - Order tracking via QR codes
- **🌙 Dark Mode Ready** - Theme support infrastructure
- **♿ Accessibility** - RTL support for Arabic, keyboard navigation
- **📊 Data Visualization** - Interactive charts using Recharts
- **🔍 Advanced Search** - Filter and search across all modules

## 🛠 Tech Stack

### Frontend Framework
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.3.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### State Management & Data Fetching
- **Zustand 4.5.0** - Lightweight state management
- **TanStack Query 5.17.19** - Powerful async state management
- **React Hook Form 7.49.3** - Performant form handling
- **Zod 3.22.4** - Schema validation

### UI & Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.563.0** - Beautiful icon library
- **Recharts 3.7.0** - Composable charting library
- **CSS3** - Custom properties and animations

### Internationalization
- **i18next 23.7.16** - Internationalization framework
- **react-i18next 14.0.1** - React bindings for i18next
- **Google Translate Widget** - Runtime translation support

### Utilities & Tools
- **React Router DOM 7.13.0** - Client-side routing
- **Axios 1.6.5** - HTTP client
- **date-fns 3.2.0** - Date manipulation
- **jsPDF 2.5.1** - PDF generation
- **html5-qrcode 2.3.8** - QR code scanning

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite PWA Plugin** - Progressive Web App support
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16.0.0 or higher
- **npm** v7.0.0 or higher (or **yarn** v1.22.0+)
- **Git** for version control

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "Mill Automation System - Olive Oil Production Management_files/mill-automation-app"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your API endpoints and configuration.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:5173
   ```

### Quick Start Commands

```bash
# Development
npm run dev              # Start dev server with hot reload

# Building
npm run build            # Build for production
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

## 📁 Project Structure

```
mill-automation-app/
├── public/                      # Static assets
│   ├── pwa-192x192.png         # PWA icon (192x192)
│   ├── pwa-512x512.png         # PWA icon (512x512)
│   └── favicon.ico             # Favicon
│
├── src/
│   ├── components/             # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Table.tsx
│   │   ├── Dashboard.jsx      # Dashboard module
│   │   ├── Reception.jsx      # Order reception
│   │   ├── Processing.jsx     # Production management
│   │   ├── Accounting.jsx     # Invoicing & payments
│   │   ├── Inventory.jsx      # Stock management
│   │   ├── Staff.jsx          # Employee management
│   │   ├── Reports.jsx        # Reporting module
│   │   ├── Analytics.jsx      # Analytics dashboard
│   │   ├── Login.jsx          # Authentication
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   └── GoogleTranslate.jsx # Translation widget
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts        # Authentication hook
│   │   └── useOrders.ts      # Order management hook
│   │
│   ├── lib/                   # Core libraries
│   │   ├── api-client.ts     # Axios configuration
│   │   ├── i18n.ts           # i18next setup
│   │   └── utils.ts          # Utility functions
│   │
│   ├── services/              # API services
│   │   ├── api.js            # API service layer
│   │   └── mockData.js       # Mock data for development
│   │
│   ├── store/                 # Zustand stores
│   │   ├── app.store.ts      # Global app state
│   │   └── auth.store.ts     # Authentication state
│   │
│   ├── types/                 # TypeScript definitions
│   │   ├── auth.ts           # Auth types
│   │   ├── order.ts          # Order types
│   │   ├── processing.ts     # Processing types
│   │   ├── invoice.ts        # Invoice types
│   │   └── common.ts         # Common types
│   │
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles (Tailwind)
│   ├── themes.js             # Theme configuration
│   └── translations.js       # Translation strings
│
├── .vscode/                   # VS Code configuration
├── node_modules/              # Dependencies
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
│
└── Documentation/
    ├── BUILD_FIX_SUMMARY.md
    ├── ERROR_FIXES.md
    ├── FOLDER_STRUCTURE.md
    ├── GOOGLE_TRANSLATE_GUIDE.md
    ├── IMPLEMENTATION_SUMMARY.md
    ├── LANGUAGE_GUIDE.md
    ├── LOGIN_IMPLEMENTATION.md
    ├── MOBILE_GUIDE.md
    └── PRODUCTION_IMPLEMENTATION.md
```

## 🎯 Core Modules

### 1. 📊 Dashboard
**Route:** `/dashboard`

Real-time overview of mill operations featuring:
- Total orders, queue status, processing, and completed orders
- Production line status with malaxer unit visualization
- Recent orders table with quick actions
- Key performance indicators (KPIs)
- Live production metrics

### 2. 📝 Reception & Registration
**Route:** `/reception`

Customer registration and order management:
- Customer information capture (name, phone, ID)
- Order details (quantity, processing type, olive variety)
- Queue management system with visual timeline
- QR code generation for order tracking
- Order status updates

### 3. ⚙️ Processing
**Route:** `/processing`

Production line management:
- 3 production lines with 6 malaxer units each (18 total)
- Real-time status tracking for each unit
- Malaxer availability and assignment
- Processing timers and progress bars
- Production workflow automation

### 4. 💰 Accounting & Payment
**Route:** `/accounting`

Financial management and invoicing:
- Cash and oil collection tracking
- Automated invoice generation
- PDF invoice export with jsPDF
- Payment status management
- Ready-for-collection orders
- Financial reports and summaries

### 5. 📦 Inventory Management
**Route:** `/inventory`

Stock and resource tracking:
- Oil storage monitoring
- Container management (16L cans, gallons, bottles)
- Spare parts inventory
- Stock level alerts
- Transaction history
- Low stock notifications

### 6. 👥 Staff Management
**Route:** `/staff`

Employee administration:
- Employee records and profiles
- Salary management (monthly/daily rates)
- Attendance tracking
- Staff status (active/inactive)
- Role assignment
- Performance tracking

### 7. 📈 Reports & Analytics
**Route:** `/reports` and `/analytics`

Comprehensive reporting system:
- Daily production reports
- Financial summaries
- Customer analytics
- Oil yield analysis
- Processing time statistics
- Custom date range filtering
- Export to PDF/Excel
- Interactive charts and graphs

### 8. 🔐 Authentication
**Route:** `/login`

Secure access control:
- User login with credentials
- Role-based access control (Admin, Manager, Operator)
- Session management
- Password recovery
- Remember me functionality

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_TOKEN_KEY=mill_auth_token
VITE_SESSION_TIMEOUT=3600000

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_PWA=true

# Google Translate
VITE_DEFAULT_LANGUAGE=en
VITE_SUPPORTED_LANGUAGES=en,hi,ar
```

### Vite Configuration

The `vite.config.ts` includes:
- React plugin with Fast Refresh
- PWA plugin for offline support
- Path aliases for cleaner imports
- Build optimization settings

### Tailwind Configuration

Custom theme in `tailwind.config.js`:
- Olive-themed color palette
- Custom animations
- Responsive breakpoints
- RTL support utilities

## 💻 Development

### Development Server

```bash
npm run dev
```

Features:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- ESLint integration
- Runs on `http://localhost:5173`

### Code Quality

```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Fix linting issues
npm run lint -- --fix
```

### Adding New Features

1. **Create component** in `src/components/`
2. **Add types** in `src/types/`
3. **Create service** in `src/services/` if API needed
4. **Add route** in `App.jsx`
5. **Update navigation** in `Sidebar.jsx`
6. **Add translations** in `translations.js`

### Path Aliases

Use configured aliases for cleaner imports:

```typescript
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';
import { apiClient } from '@/lib/api-client';
import { OrderService } from '@/services/order.service';
import { useAppStore } from '@/store/app.store';
import type { Order } from '@/types/order';
```

## 🏗 Production Build

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Asset optimization
- Source maps for debugging
- PWA service worker

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

### Deployment

The application can be deployed to:
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **AWS S3 + CloudFront** - Scalable hosting
- **Docker** - Containerized deployment
- **Traditional hosting** - Upload `dist/` folder

#### Example: Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## 🌍 Internationalization

### Supported Languages

- **English (en)** - Default
- **Hindi (hi)** - हिन्दी
- **Arabic (ar)** - العربية (with RTL support)

### Translation Systems

The app uses **two translation systems**:

#### 1. Custom Translations (`translations.js`)
For UI labels, navigation, and static content:

```javascript
const translations = {
  en: {
    dashboard: "Dashboard",
    reception: "Reception",
    // ...
  },
  hi: {
    dashboard: "डैशबोर्ड",
    reception: "स्वागत",
    // ...
  },
  ar: {
    dashboard: "لوحة التحكم",
    reception: "الاستقبال",
    // ...
  }
};
```

#### 2. Google Translate Widget
For runtime translation of all content:
- Located in sidebar header
- Translates entire application
- No API keys required
- Works offline after initial load

### Adding New Languages

1. **Update `translations.js`:**
   ```javascript
   es: {
     dashboard: "Tablero",
     // ... add all translations
   }
   ```

2. **Update `GoogleTranslate.jsx`:**
   ```javascript
   includedLanguages: 'en,hi,ar,es'
   ```

3. **Add language selector** in UI

See `LANGUAGE_GUIDE.md` and `GOOGLE_TRANSLATE_GUIDE.md` for detailed instructions.

## 📱 PWA Support

### Progressive Web App Features

- **Installable** - Add to home screen on mobile/desktop
- **Offline Support** - Service worker caching
- **App-like Experience** - Standalone display mode
- **Fast Loading** - Precached assets
- **Background Sync** - Queue offline actions

### PWA Configuration

Configured in `vite.config.ts`:
- App name: "Zaytoun Mill Management"
- Theme color: `#2C3E2D` (Olive Dark)
- Icons: 192x192 and 512x512
- Offline fallback page
- Runtime caching for API calls

### Testing PWA

1. Build the app: `npm run build`
2. Preview: `npm run preview`
3. Open in Chrome
4. Check Application tab in DevTools
5. Test "Add to Home Screen"

## 🔌 API Integration

### API Client Configuration

The app uses Axios with interceptors in `lib/api-client.ts`:

```typescript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);
```

### Service Layer

API calls are organized in `services/`:

```typescript
// services/order.service.ts
export const OrderService = {
  getAll: () => apiClient.get('/orders'),
  getById: (id: string) => apiClient.get(`/orders/${id}`),
  create: (data: Order) => apiClient.post('/orders', data),
  update: (id: string, data: Partial<Order>) => 
    apiClient.put(`/orders/${id}`, data),
  delete: (id: string) => apiClient.delete(`/orders/${id}`),
};
```

### Mock Data

For development without backend, use `services/mockData.js`:

```javascript
export const mockOrders = [
  {
    id: 'ORD-001',
    customerName: 'Ahmed Hassan',
    quantity: 500,
    status: 'processing',
    // ...
  },
  // ...
];
```

## 🎨 Design System

### Color Palette

```css
/* Olive Theme */
--olive-dark: #2C3E2D;      /* Primary dark */
--olive-medium: #4A6741;    /* Primary medium */
--olive-light: #8BA888;     /* Primary light */
--olive-pale: #D4E5D2;      /* Backgrounds */

/* Accent Colors */
--gold: #C9A961;            /* Highlights */
--gold-light: #E5D19E;      /* Hover states */
--cream: #F7F4ED;           /* Page background */

/* Status Colors */
--success: #4CAF50;
--warning: #FF9800;
--error: #F44336;
--info: #2196F3;
```

### Typography

- **Primary Font:** System fonts (San Francisco, Segoe UI, Roboto)
- **Headings:** Bold, olive-dark color
- **Body:** Regular, neutral gray
- **Monospace:** For codes and IDs

### Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All routes load correctly
- [ ] Forms validate properly
- [ ] API calls handle errors
- [ ] Translations work in all languages
- [ ] PWA installs successfully
- [ ] Offline mode functions
- [ ] Mobile responsive on all screens
- [ ] Print functionality works
- [ ] PDF generation succeeds

### Browser Compatibility

- ✅ Chrome/Edge (Chromium) 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Chrome Mobile (Android 5+)

## 📚 Documentation

Additional documentation available:

- **BUILD_FIX_SUMMARY.md** - Build issue resolutions
- **ERROR_FIXES.md** - Common errors and fixes
- **FOLDER_STRUCTURE.md** - Detailed project structure
- **GOOGLE_TRANSLATE_GUIDE.md** - Translation implementation
- **IMPLEMENTATION_SUMMARY.md** - Feature implementation details
- **LANGUAGE_GUIDE.md** - Internationalization guide
- **LOGIN_IMPLEMENTATION.md** - Authentication system
- **MOBILE_GUIDE.md** - Mobile optimization
- **PRODUCTION_IMPLEMENTATION.md** - Production deployment

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Run linting and type checking
5. Commit with descriptive messages
6. Create a pull request

### Commit Message Format

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(reception): add QR code scanning for orders

Implemented html5-qrcode library for scanning customer order QR codes
in the reception module. Includes error handling and camera permissions.

Closes #123
```

## 🐛 Troubleshooting

### Common Issues

**Issue:** Port 5173 already in use
```bash
# Solution: Use different port
npm run dev -- --port 3000
```

**Issue:** Build fails with TypeScript errors
```bash
# Solution: Check types
npm run type-check
```

**Issue:** Google Translate not loading
```bash
# Solution: Check internet connection and browser console
# Ensure no ad blockers are interfering
```

**Issue:** PWA not updating
```bash
# Solution: Clear service worker cache
# In DevTools: Application > Service Workers > Unregister
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Harsh Sharma**
- Email: sharmaharshit69657@gmail.com
- GitHub: [@harshsharma](https://github.com/harshsharma)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- TailwindCSS for the utility-first CSS framework
- All open-source contributors

## 📞 Support

For support, email sharmaharshit69657@gmail.com or open an issue in the repository.

---

**Built with ❤️ for olive oil mill management**

🫒 **Zaytoun Mill Management System** - Streamlining olive oil production since 2024
