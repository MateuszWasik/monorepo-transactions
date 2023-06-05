'use client';

import { TransactionList } from './containers/transaction-list/transaction-list';

export default function Index() {
  return (
    <div className="w-full">
      <div>
        <TransactionList />
      </div>
    </div>
  );
}
