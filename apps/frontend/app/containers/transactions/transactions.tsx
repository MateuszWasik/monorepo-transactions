import { useState } from 'react';
import type { Transaction } from '@monorepo/shared-types';
import { API_URL } from '../../constants';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { NewTransaction } from '../../components/new-transaction/new-transaction';
import { useGetTransactions } from '../../hooks/use-get-transactions';
import { SkeletonLoader } from '../../ui/skeleton-loader/skeleton-loader';

const MOCK_TRANSACTION: Transaction = {
  id: String(Math.random()),
  name: 'VISA',
  amount: 999,
  date: new Date('2023-06-06'),
  merchant: {
    name: 'TESLA',
  },
};

const OK_STATUS = 200;

export const Transactions = () => {
  const { transactions, setTransactions, isLoading } = useGetTransactions();
  const [blurryBackground, setBlurryBackground] = useState(false);

  const handleSaveNewTransaction = (newTransaction: Transaction) => {
    if (newTransaction) {
      try {
        fetch(`${API_URL}/add`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(MOCK_TRANSACTION),
        }).then((response) => {
          if (response.status === OK_STATUS) {
            setTransactions((prevState) => [...prevState, MOCK_TRANSACTION]);
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (isLoading) return <SkeletonLoader listToRender={7} />;

  return (
    <div className={`${blurryBackground && 'blur-sm'}`}>
      <NewTransaction
        setBlurryBackground={setBlurryBackground}
        handleOnFormSubmit={handleSaveNewTransaction}
      />
      <TransactionList transactions={transactions} />
    </div>
  );
};
