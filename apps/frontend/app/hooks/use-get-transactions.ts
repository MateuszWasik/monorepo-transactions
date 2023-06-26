import { API_URL } from '../constants';
import {
  SortedTransactionsByDateType,
  Transaction,
} from '@monorepo/shared-types';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useState } from 'react';

const fetchData = async (): Promise<Transaction[]> => {
  const { data } = await axios.get(`${API_URL}/transactions`);
  return data;
};

export const useGetTransactions = () => {
  const [sortedTransactionsByDate, setSortedTransactionsByDate] = useState<
    SortedTransactionsByDateType[]
  >([]);

  const { isLoading } = useQuery<Transaction[], Error>(
    'transactions',
    fetchData,
    {
      onSuccess: (data) => {
        const filteredTransactions = data
          .reduce<Transaction[]>((acc, transaction) => {
            const newObj = { ...transaction, date: new Date(transaction.date) };
            return [...acc, newObj];
          }, [])
          .sort(
            (transactionA, transactionB) =>
              Number(transactionB.date) - Number(transactionA.date)
          );

        const sortedTransactionsByDate = filteredTransactions.reduce<
          SortedTransactionsByDateType[]
        >((acc, transaction) => {
          const indexOfTheFoundObj = acc.findIndex(
            (obj) => obj.date === transaction.date.toDateString()
          );

          if (indexOfTheFoundObj !== -1) {
            acc[indexOfTheFoundObj].transactions.push(transaction);
            return acc;
          } else {
            return [
              ...acc,
              {
                date: transaction.date.toDateString(),
                transactions: [transaction],
              },
            ];
          }
        }, []);

        setSortedTransactionsByDate(sortedTransactionsByDate);
      },
    }
  );

  return { transactions: sortedTransactionsByDate, isLoading };
};
