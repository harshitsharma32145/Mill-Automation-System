import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Tenant, AuthState } from '@/types/auth';

interface AuthStore extends AuthState {
    setAuth: (user: User, token: string, tenant: Tenant) => void;
    clearAuth: () => void;
    updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            tenant: null,

            setAuth: (user, token, tenant) => {
                localStorage.setItem('auth_token', token);
                localStorage.setItem('tenant_id', tenant.id);
                set({ user, token, tenant, isAuthenticated: true });
            },

            clearAuth: () => {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('tenant_id');
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('username');
                set({ user: null, token: null, tenant: null, isAuthenticated: false });
            },

            updateUser: (userData) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...userData } : null,
                })),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                tenant: state.tenant,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
