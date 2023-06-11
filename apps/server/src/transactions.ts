import type { Transaction } from '@monorepo/shared-types';
import { randomUUID } from 'crypto';

export const transactions: Transaction[] = [
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 23.54,
    date: '20-02-2023',
    merchant: {
      name: 'MEDIA MARKT',
    },
  },
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 100,
    date: '01-05-2023',
    merchant: {
      name: 'NESTLE',
    },
  },
  {
    id: randomUUID(),
    name: 'MASTERCARD',
    amount: 99.0,
    date: '02-06-2023',
    merchant: {
      name: 'eBay',
    },
  },
  {
    id: randomUUID(),
    name: 'MASTERCARD',
    amount: 250,
    date: '03-06-2023',
    merchant: {
      name: 'RICOLA',
    },
  },
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 44.32,
    date: '05-06-2023',
    merchant: {
      name: 'Amazon',
    },
  },
];
