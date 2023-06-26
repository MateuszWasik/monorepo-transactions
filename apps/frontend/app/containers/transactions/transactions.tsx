'use client';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { NewTransaction } from '../../components/new-transaction/new-transaction';
import { useGetTransactions } from '../../hooks/use-get-transactions';
import { SkeletonLoader } from '../../ui/skeleton-loader/skeleton-loader';
import { FormTransaction } from '@monorepo/shared-types';
import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from '../../constants';

export const Transactions = () => {
  const { transactions, isLoading } = useGetTransactions();

  const mutation = useMutation({
    mutationKey: 'post-transaction',
    mutationFn: (newTransaction: FormTransaction) =>
      axios.post(`${API_URL}/add`, newTransaction),
    onSuccess: () => {
      console.log('success');
    },
  });

  const handleOnSubmit = (newTransaction: FormTransaction) => {
    mutation.mutate(newTransaction);
  };

  if (isLoading) return <SkeletonLoader listToRender={7} />;

  return (
    <>
      <NewTransaction handleOnFormSubmit={handleOnSubmit} />
      <TransactionList transactions={transactions} />
    </>
  );
};
