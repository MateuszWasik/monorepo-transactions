'use client';
import { useState } from 'react';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { NewTransaction } from '../../components/new-transaction/new-transaction';
import { useGetTransactions } from '../../hooks/use-get-transactions';
import { SkeletonLoader } from '../../ui/skeleton-loader/skeleton-loader';

export const Transactions = () => {
  const { transactions, isLoading } = useGetTransactions();
  const [blurryBackground, setBlurryBackground] = useState(false);

  const handleOnSubmit = () => {
    console.log('click');
  };

  if (isLoading) return <SkeletonLoader listToRender={7} />;

  return (
    <div className={`${blurryBackground && 'blur-sm'}`}>
      <NewTransaction
        setBlurryBackground={setBlurryBackground}
        handleOnFormSubmit={(newTransaction) => handleOnSubmit}
      />
      <TransactionList transactions={transactions} />
    </div>
  );
};
