# Production-Ready Folder Structure

```
mill-automation-app/
├── public/
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   ├── favicon.ico
│   ├── robots.txt
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/              # Shared/Reusable Components
│   │   ├── ui/                  # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   └── Spinner.tsx
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   ├── forms/               # Form components
│   │   │   ├── FormInput.tsx
│   │   │   ├── FormSelect.tsx
│   │   │   ├── FormTextarea.tsx
│   │   │   ├── FormCheckbox.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   └── QRScanner.tsx
│   │   │
│   │   └── common/              # Common components
│   │       ├── Notification.tsx
│   │       ├── ConfirmDialog.tsx
│   │       ├── EmptyState.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── LoadingScreen.tsx
│   │
│   ├── features/                # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── ProtectedRoute.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   └── pages/
│   │   │       ├── LoginPage.tsx
│   │   │       └── ForgotPasswordPage.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   ├── OrdersTable.tsx
│   │   │   │   └── ProductionLineCard.tsx
│   │   │   └── pages/
│   │   │       └── DashboardPage.tsx
│   │   │
│   │   ├── reception/
│   │   │   ├── components/
│   │   │   │   ├── OrderForm.tsx
│   │   │   │   ├── CustomerForm.tsx
│   │   │   │   ├── QRCodeDisplay.tsx
│   │   │   │   └── OrderQueue.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useOrders.ts
│   │   │   ├── schemas/
│   │   │   │   └── orderSchema.ts
│   │   │   └── pages/
│   │   │       ├── ReceptionPage.tsx
│   │   │       └── OrderDetailsPage.tsx
│   │   │
│   │   ├── processing/
│   │   │   ├── components/
│   │   │   │   ├── ProductionLineManager.tsx
│   │   │   │   ├── MalaxerGrid.tsx
│   │   │   │   ├── ProcessingTimer.tsx
│   │   │   │   └── StatusTracker.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useProcessing.ts
│   │   │   └── pages/
│   │   │       └── ProcessingPage.tsx
│   │   │
│   │   ├── accounting/
│   │   │   ├── components/
│   │   │   │   ├── InvoiceForm.tsx
│   │   │   │   ├── InvoicePreview.tsx
│   │   │   │   └── PaymentCalculator.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useInvoices.ts
│   │   │   ├── utils/
│   │   │   │   └── pdfGenerator.ts
│   │   │   └── pages/
│   │   │       └── AccountingPage.tsx
│   │   │
│   │   ├── inventory/
│   │   │   ├── components/
│   │   │   │   ├── InventoryTable.tsx
│   │   │   │   ├── StockAlert.tsx
│   │   │   │   └── TransactionHistory.tsx
│   │   │   └── pages/
│   │   │       └── InventoryPage.tsx
│   │   │
│   │   ├── staff/
│   │   │   ├── components/
│   │   │   │   ├── StaffTable.tsx
│   │   │   │   ├── AttendanceTracker.tsx
│   │   │   │   └── SalaryCalculator.tsx
│   │   │   └── pages/
│   │   │       └── StaffPage.tsx
│   │   │
│   │   ├── reports/
│   │   │   ├── components/
│   │   │   │   ├── ReportFilters.tsx
│   │   │   │   ├── ChartCard.tsx
│   │   │   │   └── ExportButtons.tsx
│   │   │   └── pages/
│   │   │       └── ReportsPage.tsx
│   │   │
│   │   ├── analytics/
│   │   │   ├── components/
│   │   │   │   ├── KPICard.tsx
│   │   │   │   ├── PerformanceChart.tsx
│   │   │   │   └── YieldAnalysis.tsx
│   │   │   └── pages/
│   │   │       └── AnalyticsPage.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── components/
│   │   │   │   ├── TenantSettings.tsx
│   │   │   │   ├── UserManagement.tsx
│   │   │   │   ├── BranchSettings.tsx
│   │   │   │   └── FeeConfiguration.tsx
│   │   │   └── pages/
│   │   │       └── AdminPage.tsx
│   │   │
│   │   └── tracking/            # Customer tracking portal
│   │       ├── components/
│   │       │   ├── OrderTracker.tsx
│   │       │   ├── StatusTimeline.tsx
│   │       │   └── InvoiceViewer.tsx
│   │       └── pages/
│   │           └── TrackingPage.tsx
│   │
│   ├── hooks/                   # Global custom hooks
│   │   ├── useAuth.ts
│   │   ├── useOrders.ts
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   └── useOnlineStatus.ts
│   │
│   ├── lib/                     # Core libraries & configs
│   │   ├── api-client.ts
│   │   ├── i18n.ts
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── queryClient.ts
│   │
│   ├── services/                # API services
│   │   ├── auth.service.ts
│   │   ├── order.service.ts
│   │   ├── processing.service.ts
│   │   ├── invoice.service.ts
│   │   ├── inventory.service.ts
│   │   ├── staff.service.ts
│   │   ├── report.service.ts
│   │   └── tenant.service.ts
│   │
│   ├── store/                   # Zustand stores
│   │   ├── auth.store.ts
│   │   ├── app.store.ts
│   │   ├── order.store.ts
│   │   └── ui.store.ts
│   │
│   ├── types/                   # TypeScript types
│   │   ├── auth.ts
│   │   ├── order.ts
│   │   ├── processing.ts
│   │   ├── invoice.ts
│   │   ├── inventory.ts
│   │   ├── staff.ts
│   │   ├── report.ts
│   │   └── common.ts
│   │
│   ├── utils/                   # Utility functions
│   │   ├── validation.ts
│   │   ├── formatting.ts
│   │   ├── qrcode.ts
│   │   ├── pdf.ts
│   │   └── notifications.ts
│   │
│   ├── routes/                  # Route definitions
│   │   ├── index.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── RoleGuard.tsx
│   │
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
│
├── .env.example
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

## Architecture Principles

1. **Feature-Based**: Each feature is self-contained with its own components, hooks, and pages
2. **Shared Components**: Reusable UI components in `/components`
3. **Type Safety**: TypeScript types in `/types`
4. **Service Layer**: API calls abstracted in `/services`
5. **State Management**: Zustand stores in `/store`
6. **Custom Hooks**: Reusable logic in `/hooks`
7. **Utilities**: Helper functions in `/utils` and `/lib`
