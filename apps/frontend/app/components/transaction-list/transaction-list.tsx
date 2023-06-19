import { SortedTransactionsByDateType } from '@monorepo/shared-types';
import { TransactionCard } from '../transaction-card/transaction-card';

type TransactionListProps = {
  transactions: SortedTransactionsByDateType[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <ul role="list" className="flex flex-col w-full mt-4">
      {transactions.map((transaction, index) => (
        <div key={`${transaction.date}-${index}`}>
          <span>{transaction.date}</span>
          {transaction.transactions.map((transaction) => (
            <li key={transaction.id} className="flex-1 gap-x-6 py-5">
              <TransactionCard {...transaction} />
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};
