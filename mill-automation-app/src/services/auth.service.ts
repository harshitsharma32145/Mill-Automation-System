import { apiClient } from '@/lib/api-client';
import type { LoginCredentials, LoginResponse, User } from '@/types/auth';

export const authService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        return apiClient.post<LoginResponse>('/auth/login', credentials);
    },

    logout: async (): Promise<void> => {
        return apiClient.post<void>('/auth/logout');
    },

    getCurrentUser: async (): Promise<User> => {
        return apiClient.get<User>('/auth/me');
    },

    refreshToken: async (): Promise<{ token: string }> => {
        return apiClient.post<{ token: string }>('/auth/refresh');
    },

    updateProfile: async (data: Partial<User>): Promise<User> => {
        return apiClient.patch<User>('/auth/profile', data);
    },

    changePassword: async (oldPassword: string, newPassword: string): Promise<void> => {
        return apiClient.post<void>('/auth/change-password', { oldPassword, newPassword });
    },
};
