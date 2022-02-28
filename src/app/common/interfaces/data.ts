export interface PageData {
    employees: Employee[];
    averageSalary: number;
    customers: Contact[];
    suppliers: Contact[];
    error?: any;
    // customerInvoices: Invoice[];
    // supplierInvoices: Invoice[];
}

export interface Employee {
    employeeID: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    status: string;
    startDate?: string;
}

export interface Contact {
    contactID: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    isCustomer: boolean;
    isSupplier: boolean;
    invoices: Invoice[];
    sumOfInvoices: number;
}

export interface Invoice {
    invoiceId: number;
    type: string;
    date: string;
    contact: Contact;
    status: string;
    subTotal: number;
    total: number;
    totalTax: number;
    amountDue: number;
    amountPaid: number;
    amountCredited: number;
    updatedDateUTC: string;
}