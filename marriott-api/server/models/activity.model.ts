export interface Activity {
    _id?: string;
    title: string;
    type: string;
    category: string;
    workerEmail: string[];
    staffEmail: string;
    attendance: boolean;
    support: number;
    description: string;
    startDate: string;
    endDate: string;
    quotation: Quotation[];
    invoice: Invoice;
    expand: boolean;
}

export interface Client {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;
    contactDetail: string;
    NDISNo: string;
    marriottDivision: string;
    displayName: string;
}


export interface Quotation {
    title: string;
    description: string;
    price: number;
    active?: number;
}

export interface Invoice {
    info: {
        time: string;
        service: Quotation;
        client: Client;
    }[];
    totalCost: number | 0;
}
