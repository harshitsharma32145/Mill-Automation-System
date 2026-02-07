// Processing Types
export interface ProductionLine {
    id: string;
    name: string;
    branchId: string;
    status: LineStatus;
    currentOrder?: string;
    malaxers: Malaxer[];
    capacity: number;
    isActive: boolean;
}

export interface Malaxer {
    id: number;
    status: MalaxerStatus;
    orderId?: string;
    startTime?: string;
    maxDuration: number; // minutes
}

export enum LineStatus {
    IDLE = 'idle',
    ACTIVE = 'active',
    MAINTENANCE = 'maintenance',
    OFFLINE = 'offline',
}

export enum MalaxerStatus {
    AVAILABLE = 'available',
    IN_USE = 'in-use',
    MAINTENANCE = 'maintenance',
}

export interface ProcessingSession {
    id: string;
    orderId: string;
    lineId: string;
    malaxerIds: number[];
    startTime: string;
    endTime?: string;
    duration?: number;
    photos: string[];
    notes?: string;
    alerts: ProcessingAlert[];
}

export interface ProcessingAlert {
    id: string;
    type: AlertType;
    message: string;
    timestamp: string;
    acknowledged: boolean;
}

export enum AlertType {
    TIME_WARNING = 'time_warning',
    TIME_EXCEEDED = 'time_exceeded',
    EQUIPMENT_ISSUE = 'equipment_issue',
    QUALITY_CHECK = 'quality_check',
}
