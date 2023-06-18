import { SortedTransactionsByDateType } from '@monorepo/shared-types';
import { TransactionCard } from '../transaction-card/transaction-card';

type TransactionListProps = {
  transactions: SortedTransactionsByDateType[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <ul role="list" className="flex flex-col divide-y divide-gray-100 w-full">
      {transactions.map((transaction) => (
        <>
          <span>{transaction.date}</span>
          {transaction.transactions.map((transaction) => (
            <li key={transaction.id} className="flex-1 gap-x-6 py-5">
              <TransactionCard {...transaction} />
            </li>
          ))}
        </>
      ))}
    </ul>
  );
};
