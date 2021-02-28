import { Admin } from "./admin.model";
import { Client } from "./client.model";

export interface Activity {
  _id?: string;
  title: string;
  type: string;
  category: string;
  client: Client[];
  inspector: Admin;
  absent: boolean;
  support: number;
  description: string;
  startDate: string;
  endDate: string;
  quotation: Quotation[];
  invoice: Invoice;
  expand: boolean;
  isExtraBillVisible?: boolean;
  isNdisBillVisible?: boolean;
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
