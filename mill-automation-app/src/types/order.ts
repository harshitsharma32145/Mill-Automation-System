// Reception/Order Types
import type { Invoice } from './invoice';
export interface Order {
    id: string;
    patchNumber: string;
    qrCode: string;
    customer: Customer;
    tenantId: string;
    branchId: string;
    status: OrderStatus;
    processingType: ProcessingType;
    weight: number;
    bags?: number;
    boxes?: number;
    images: string[];
    notes?: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    assignedLine?: string;
    assignedMalaxers?: number[];
    startTime?: string;
    endTime?: string;
    oilProduced?: number;
    invoice?: Invoice;
}

export interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    village: string;
    address?: string;
    idNumber?: string;
}

export enum OrderStatus {
    IN_QUEUE = 'in-queue',
    MALAXING = 'malaxing',
    DECANTER = 'decanter',
    FINISHED = 'finished',
    INVOICED = 'invoiced',
    COMPLETED = 'completed',
}

export enum ProcessingType {
    NORMAL = 'normal',
    ORGANIC = 'organic',
}

export interface CreateOrderInput {
    customer: Omit<Customer, 'id'>;
    weight: number;
    bags?: number;
    boxes?: number;
    processingType: ProcessingType;
    images?: File[];
    notes?: string;
}
