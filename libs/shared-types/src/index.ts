export * from './lib/shared-types';

export interface Transaction {
  id: string;
  cardName: string;
  amount: number;
  date: Date;
  merchantName: string;
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

export type FormTransaction = Omit<Transaction, 'id' | 'date'>;
