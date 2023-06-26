import type { Transaction } from '@monorepo/shared-types';
import { randomUUID } from 'crypto';

// generate mock data for transactions

export const transactions: Transaction[] = [
  {
    id: randomUUID(),
    cardName: 'Transaction 1',
    amount: 19.99,
    date: new Date('2023-06-15'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 2',
    amount: 49.99,
    date: new Date('2023-06-14'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 3',
    amount: 9.99,
    date: new Date('2023-06-14'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 4',
    amount: 24.99,
    date: new Date('2023-06-14'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 5',
    amount: 15.99,
    date: new Date('2023-06-11'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 6',
    amount: 59.99,
    date: new Date('2023-06-10'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 7',
    amount: 12.99,
    date: new Date('2023-06-09'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 8',
    amount: 39.99,
    date: new Date('2023-06-09'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 9',
    amount: 8.99,
    date: new Date('2023-06-09'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 10',
    amount: 29.99,
    date: new Date('2023-06-06'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 11',
    amount: 14.99,
    date: new Date('2023-06-06'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 12',
    amount: 19.99,
    date: new Date('2023-06-04'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 13',
    amount: 49.99,
    date: new Date('2023-06-03'),
    merchantName: 'Merchant A',
  },
  {
    id: randomUUID(),
    cardName: 'Transaction 14',
    amount: 9.99,
    date: new Date('2023-06-02'),
    merchantName: 'Merchant A',
  },
];
