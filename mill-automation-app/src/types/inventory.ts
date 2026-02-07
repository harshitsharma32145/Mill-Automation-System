// Inventory Types
export interface InventoryItem {
    id: string;
    branchId: string;
    category: InventoryCategory;
    name: string;
    sku?: string;
    currentStock: number;
    unit: string;
    minStock: number;
    maxStock?: number;
    unitCost: number;
    supplier?: string;
    lastRestocked?: string;
    notes?: string;
}

export enum InventoryCategory {
    CANS = 'cans',
    GALLONS = 'gallons',
    SPARE_PARTS = 'spare_parts',
    CONSUMABLES = 'consumables',
    PACKAGING = 'packaging',
}

export interface StockTransaction {
    id: string;
    itemId: string;
    type: TransactionType;
    quantity: number;
    reference?: string;
    orderId?: string;
    notes?: string;
    createdAt: string;
    createdBy: string;
}

export enum TransactionType {
    PURCHASE = 'purchase',
    USAGE = 'usage',
    ADJUSTMENT = 'adjustment',
    RETURN = 'return',
}

// Staff Types
export interface StaffMember {
    id: string;
    branchId: string;
    name: string;
    phone: string;
    email?: string;
    role: string;
    salaryType: SalaryType;
    salaryAmount: number;
    hireDate: string;
    isActive: boolean;
    idNumber?: string;
    address?: string;
    emergencyContact?: string;
}

export enum SalaryType {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    MONTHLY = 'monthly',
}

export interface Attendance {
    id: string;
    staffId: string;
    date: string;
    checkIn?: string;
    checkOut?: string;
    status: AttendanceStatus;
    notes?: string;
}

export enum AttendanceStatus {
    PRESENT = 'present',
    ABSENT = 'absent',
    LATE = 'late',
    HALF_DAY = 'half_day',
    LEAVE = 'leave',
}

export interface SalaryPayment {
    id: string;
    staffId: string;
    amount: number;
    period: string;
    paidDate: string;
    method: string;
    notes?: string;
    createdBy: string;
}
