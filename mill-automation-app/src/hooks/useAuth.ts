import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/auth.store';
import { useAppStore } from '@/store/app.store';
import type { LoginCredentials } from '@/types/auth';

export const useLogin = () => {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);
    const addNotification = useAppStore((state) => state.addNotification);

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
        onSuccess: (data) => {
            setAuth(data.user, data.token, data.tenant);
            addNotification({
                type: 'success',
                message: `Welcome back, ${data.user.name}!`,
            });
            navigate('/dashboard');
        },
        onError: (error: any) => {
            addNotification({
                type: 'error',
                message: error.response?.data?.message || 'Invalid credentials',
            });
        },
    });
};

export const useLogout = () => {
    const navigate = useNavigate();
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            clearAuth();
            queryClient.clear();
            navigate('/login');
        },
    });
};

export const useAuth = () => {
    const { user, isAuthenticated, tenant } = useAuthStore();

    const hasRole = (roles: string | string[]) => {
        if (!user) return false;
        const roleArray = Array.isArray(roles) ? roles : [roles];
        return roleArray.includes(user.role);
    };

    const hasPermission = (permission: string) => {
        // Implement permission checking logic
        return true;
    };

    return {
        user,
        isAuthenticated,
        tenant,
        hasRole,
        hasPermission,
    };
};
