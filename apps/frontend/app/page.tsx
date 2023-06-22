'use client';
import { Transactions } from './containers/transactions/transactions';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Index() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Transactions />
    </QueryClientProvider>
  );
}
