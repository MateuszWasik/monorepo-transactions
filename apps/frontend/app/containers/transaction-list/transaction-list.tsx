import { useEffect, useState } from 'react';
import type { Transaction } from '@monorepo/shared-types';
import { TransactionCard } from '../../components/transaction-card/transaction-card';

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="bg-slate-200">
      <ul role="list" className="flex flex-col divide-y divide-gray-100 w-full">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex-1 gap-x-6 py-5">
            <TransactionCard {...transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
};
