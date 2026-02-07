import { apiClient } from '@/lib/api-client';
import type { Order, CreateOrderInput } from '@/types/order';

export const orderService = {
    getAll: async (params?: { status?: string; page?: number; limit?: number }): Promise<{ data: Order[]; total: number }> => {
        return apiClient.get<{ data: Order[]; total: number }>('/orders', { params });
    },

    getById: async (id: string): Promise<Order> => {
        return apiClient.get<Order>(`/orders/${id}`);
    },

    getByPatchNumber: async (patchNumber: string): Promise<Order> => {
        return apiClient.get<Order>(`/orders/patch/${patchNumber}`);
    },

    create: async (data: CreateOrderInput): Promise<Order> => {
        const formData = new FormData();

        formData.append('customer', JSON.stringify(data.customer));
        formData.append('weight', data.weight.toString());
        formData.append('processingType', data.processingType);

        if (data.bags) formData.append('bags', data.bags.toString());
        if (data.boxes) formData.append('boxes', data.boxes.toString());
        if (data.notes) formData.append('notes', data.notes);

        if (data.images) {
            data.images.forEach((image) => {
                formData.append(`images`, image);
            });
        }

        return apiClient.upload<Order>('/orders', formData);
    },

    update: async (id: string, data: Partial<Order>): Promise<Order> => {
        return apiClient.patch<Order>(`/orders/${id}`, data);
    },

    updateStatus: async (id: string, status: string): Promise<Order> => {
        return apiClient.patch<Order>(`/orders/${id}/status`, { status });
    },

    delete: async (id: string): Promise<void> => {
        return apiClient.delete<void>(`/orders/${id}`);
    },

    sendNotification: async (id: string, type: 'whatsapp' | 'sms'): Promise<void> => {
        return apiClient.post<void>(`/orders/${id}/notify`, { type });
    },

    getQRCode: async (id: string): Promise<{ qrCode: string }> => {
        return apiClient.get<{ qrCode: string }>(`/orders/${id}/qr`);
    },
};
