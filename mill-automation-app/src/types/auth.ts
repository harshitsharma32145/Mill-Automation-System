// Core Types
export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    tenantId: string;
    branchId?: string;
    avatar?: string;
    phone?: string;
}

export enum UserRole {
    SUPER_ADMIN = 'super_admin',
    ADMIN = 'admin',
    MANAGER = 'manager',
    OPERATOR = 'operator',
    ACCOUNTANT = 'accountant',
    VIEWER = 'viewer',
}

export interface Tenant {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    settings: TenantSettings;
    branches: Branch[];
    createdAt: string;
    isActive: boolean;
}

export interface Branch {
    id: string;
    tenantId: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    isActive: boolean;
}

export interface TenantSettings {
    currency: string;
    language: string;
    timezone: string;
    fees: FeeSettings;
    branding: BrandingSettings;
}

export interface FeeSettings {
    normalProcessing: number;
    organicProcessing: number;
    canPrice: number;
    gallonPrice: number;
}

export interface BrandingSettings {
    primaryColor: string;
    logo?: string;
    favicon?: string;
}

// Auth Types
export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    tenant: Tenant | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
    tenantSlug?: string;
}

export interface LoginResponse {
    user: User;
    token: string;
    tenant: Tenant;
}
