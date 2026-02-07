import { useQuery, useMutation, useQueryClient, UseQueryOptions } from '@tanstack/react-query';
import { orderService } from '@/services/order.service';
import type { Order, CreateOrderInput } from '@/types/order';
import { useAppStore } from '@/store/app.store';

export const useOrders = (params?: { status?: string; page?: number; limit?: number }) => {
    return useQuery({
        queryKey: ['orders', params],
        queryFn: () => orderService.getAll(params),
    });
};

export const useOrder = (id: string, options?: Omit<UseQueryOptions<Order>, 'queryKey' | 'queryFn'>) => {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => orderService.getById(id),
        enabled: !!id,
        ...options,
    });
};

export const useCreateOrder = () => {
    const queryClient = useQueryClient();
    const addOrder = useAppStore((state) => state.addOrder);
    const addNotification = useAppStore((state) => state.addNotification);

    return useMutation({
        mutationFn: (data: CreateOrderInput) => orderService.create(data),
        onSuccess: (newOrder) => {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            addOrder(newOrder);
            addNotification({
                type: 'success',
                message: `Order ${newOrder.patchNumber} created successfully`,
            });
        },
        onError: (error: any) => {
            addNotification({
                type: 'error',
                message: error.response?.data?.message || 'Failed to create order',
            });
        },
    });
};

export const useUpdateOrder = () => {
    const queryClient = useQueryClient();
    const updateOrder = useAppStore((state) => state.updateOrder);
    const addNotification = useAppStore((state) => state.addNotification);

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: Partial<Order> }) =>
            orderService.update(id, data),
        onSuccess: (updatedOrder) => {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            queryClient.invalidateQueries({ queryKey: ['order', updatedOrder.id] });
            updateOrder(updatedOrder.id, updatedOrder);
            addNotification({
                type: 'success',
                message: 'Order updated successfully',
            });
        },
        onError: (error: any) => {
            addNotification({
                type: 'error',
                message: error.response?.data?.message || 'Failed to update order',
            });
        },
    });
};

export const useUpdateOrderStatus = () => {
    const queryClient = useQueryClient();
    const updateOrder = useAppStore((state) => state.updateOrder);

    return useMutation({
        mutationFn: ({ id, status }: { id: string; status: string }) =>
            orderService.updateStatus(id, status),
        onSuccess: (updatedOrder) => {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            queryClient.invalidateQueries({ queryKey: ['order', updatedOrder.id] });
            updateOrder(updatedOrder.id, updatedOrder);
        },
    });
};

export const useSendNotification = () => {
    const addNotification = useAppStore((state) => state.addNotification);

    return useMutation({
        mutationFn: ({ id, type }: { id: string; type: 'whatsapp' | 'sms' }) =>
            orderService.sendNotification(id, type),
        onSuccess: () => {
            addNotification({
                type: 'success',
                message: 'Notification sent successfully',
            });
        },
        onError: (error: any) => {
            addNotification({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send notification',
            });
        },
    });
};
