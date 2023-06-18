import type { Transaction } from '@monorepo/shared-types';
import { randomUUID } from 'crypto';

export const transactions: Transaction[] = [
  {
    id: randomUUID(),
    name: 'Transaction 1',
    amount: 19.99,
    date: new Date('2023-06-15'),
    merchant: {
      name: 'Merchant A',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 2',
    amount: 49.99,
    date: new Date('2023-06-14'),
    merchant: {
      name: 'Merchant B',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 3',
    amount: 9.99,
    date: new Date('2023-06-14'),
    merchant: {
      name: 'Merchant C',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 4',
    amount: 24.99,
    date: new Date('2023-06-14'),
    merchant: {
      name: 'Merchant D',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 5',
    amount: 15.99,
    date: new Date('2023-06-11'),
    merchant: {
      name: 'Merchant E',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 6',
    amount: 59.99,
    date: new Date('2023-06-10'),
    merchant: {
      name: 'Merchant F',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 7',
    amount: 12.99,
    date: new Date('2023-06-09'),
    merchant: {
      name: 'Merchant G',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 8',
    amount: 39.99,
    date: new Date('2023-06-09'),
    merchant: {
      name: 'Merchant H',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 9',
    amount: 8.99,
    date: new Date('2023-06-09'),
    merchant: {
      name: 'Merchant I',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 10',
    amount: 29.99,
    date: new Date('2023-06-06'),
    merchant: {
      name: 'Merchant J',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 11',
    amount: 14.99,
    date: new Date('2023-06-06'),
    merchant: {
      name: 'Merchant K',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 12',
    amount: 19.99,
    date: new Date('2023-06-04'),
    merchant: {
      name: 'Merchant L',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 13',
    amount: 49.99,
    date: new Date('2023-06-03'),
    merchant: {
      name: 'Merchant M',
    },
  },
  {
    id: randomUUID(),
    name: 'Transaction 14',
    amount: 9.99,
    date: new Date('2023-06-02'),
    merchant: {
      name: 'Merchant N',
    },
  },
];
