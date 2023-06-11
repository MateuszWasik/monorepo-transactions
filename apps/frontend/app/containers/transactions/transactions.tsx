import { useEffect, useState } from 'react';
import type { Transaction } from '@monorepo/shared-types';
import { API_URL } from '../../constants';
import { TransactionList } from '../../components/transaction-list/transaction-list';
import { NewTransaction } from '../../components/new-transaction/new-transaction';

const MOCK_TRANSACTION = {
  id: Math.random(),
  name: 'VISA',
  amount: 999,
  date: '06-06-2023',
  merchant: {
    name: 'TESLA',
  },
};

const OK_STATUS = 200

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [blurryBackground, setBlurryBackground] = useState(false);

  const handleSaveNewTransaction = (newTransaction: Transaction) => {

    if(newTransaction) {
      fetch(`${API_URL}/add`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(MOCK_TRANSACTION),
      }).then(response => {
        if (response.status === OK_STATUS) {
          setTransactions((prevState => [...prevState, ...MOCK_TRANSACTION]))
      }})
    }
    else {
      console.error('Something went wrong')
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/transactions`)
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions));
  }, []);
  return (
    <div className={`${blurryBackground && 'blur-sm'}`}>
      <NewTransaction setBlurryBackground={setBlurryBackground} handleOnFormSubmit={handleSaveNewTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};
