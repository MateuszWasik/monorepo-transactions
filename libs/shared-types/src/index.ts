export * from './lib/shared-types';

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: Date;
  merchant: Merchant;
}

export interface Merchant {
  name: string;
}

export interface Money {
  amount: number;
  currency: Currency;
}

export type Currency = 'PLN' | 'EUR' | 'USD';

export interface SortedTransactionsByDateType {
  date: string;
  transactions: Transaction[];
}
