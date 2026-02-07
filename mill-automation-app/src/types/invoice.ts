// Invoice & Accounting Types
export interface Invoice {
    id: string;
    orderId: string;
    invoiceNumber: string;
    customer: {
        name: string;
        phone: string;
        village: string;
    };
    items: InvoiceItem[];
    oilProduced: number;
    paymentMethod: PaymentMethod;
    oilReturned?: number;
    cashPaid?: number;
    fees: {
        processing: number;
        cans: number;
        gallons: number;
        total: number;
    };
    status: InvoiceStatus;
    pdfUrl?: string;
    createdAt: string;
    createdBy: string;
}

export interface InvoiceItem {
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    total: number;
}

export enum PaymentMethod {
    CASH = 'cash',
    OIL_RETURN = 'oil_return',
    MIXED = 'mixed',
}

export enum InvoiceStatus {
    DRAFT = 'draft',
    ISSUED = 'issued',
    PAID = 'paid',
    CANCELLED = 'cancelled',
}

export interface CreateInvoiceInput {
    orderId: string;
    oilProduced: number;
    cansUsed: number;
    gallonsUsed: number;
    paymentMethod: PaymentMethod;
    oilReturned?: number;
    cashPaid?: number;
    notes?: string;
}
