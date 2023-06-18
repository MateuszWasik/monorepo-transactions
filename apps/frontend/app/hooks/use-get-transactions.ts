import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import {
  SortedTransactionsByDateType,
  Transaction,
} from '@monorepo/shared-types';

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/transactions`)
      .then((response) => response.json())
      .then((transactions) => {
        setTransactions(transactions);
      });
  }, []);

  const filteredTransactions = transactions
    .reduce<Transaction[]>((acc, transaction) => {
      const newObj = { ...transaction, date: new Date(transaction.date) };
      return [...acc, newObj];
    }, [])
    .sort(
      (transactionA, transactionB) =>
        Number(transactionB.date) - Number(transactionA.date)
    );

  const sortedTransactionByDates = filteredTransactions.reduce<
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

  return { transactions: sortedTransactionByDates, setTransactions };
};
