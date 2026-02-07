import { create } from 'zustand';
import type { Order } from '@/types/order';
import type { ProductionLine } from '@/types/processing';

interface AppStore {
    // Orders
    orders: Order[];
    setOrders: (orders: Order[]) => void;
    addOrder: (order: Order) => void;
    updateOrder: (id: string, data: Partial<Order>) => void;
    removeOrder: (id: string) => void;

    // Production Lines
    productionLines: ProductionLine[];
    setProductionLines: (lines: ProductionLine[]) => void;
    updateProductionLine: (id: string, data: Partial<ProductionLine>) => void;

    // UI State
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebar: () => void;

    // Notifications
    notifications: Notification[];
    addNotification: (notification: Omit<Notification, 'id'>) => void;
    removeNotification: (id: string) => void;
}

interface Notification {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    duration?: number;
}

export const useAppStore = create<AppStore>((set) => ({
    // Orders
    orders: [],
    setOrders: (orders) => set({ orders }),
    addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
    updateOrder: (id, data) =>
        set((state) => ({
            orders: state.orders.map((o) => (o.id === id ? { ...o, ...data } : o)),
        })),
    removeOrder: (id) =>
        set((state) => ({ orders: state.orders.filter((o) => o.id !== id) })),

    // Production Lines
    productionLines: [],
    setProductionLines: (lines) => set({ productionLines: lines }),
    updateProductionLine: (id, data) =>
        set((state) => ({
            productionLines: state.productionLines.map((line) =>
                line.id === id ? { ...line, ...data } : line
            ),
        })),

    // UI State
    sidebarOpen: false,
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

    // Notifications
    notifications: [],
    addNotification: (notification) =>
        set((state) => ({
            notifications: [
                ...state.notifications,
                { ...notification, id: Date.now().toString() },
            ],
        })),
    removeNotification: (id) =>
        set((state) => ({
            notifications: state.notifications.filter((n) => n.id !== id),
        })),
}));
