import { TransactionCard } from '../transaction-card/transaction-card';
import type { Transaction } from '@monorepo/shared-types';

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <ul role="list" className="flex flex-col divide-y divide-gray-100 w-full">
      {transactions.map((transaction) => (
        <li key={transaction.id} className="flex-1 gap-x-6 py-5">
          <TransactionCard {...transaction} />
        </li>
      ))}
    </ul>
  );
};
