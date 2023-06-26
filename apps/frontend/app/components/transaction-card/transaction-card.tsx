import { Transaction } from '@monorepo/shared-types';
import { UserAvatar } from '../user-avatar/user-avatar';

export const TransactionCard = ({
  id,
  cardName,
  amount,
  merchantName,
}: Transaction) => {
  return (
    <div className="flex justify-between items-center min-w-0 gap-x-6 py-5 px-5 rounded-md bg-gray-100 dark:bg-gray-700 shadow-lg dark:shadow-gray-700/50">
      <div className="flex gap-x-4">
        <UserAvatar value={merchantName} />
        <div className="flex justify-center flex-col min-w-0  px-3">
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
            {merchantName}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-900 dark:text-gray-300">
            {cardName}
          </p>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:items-center">
        <p className="text-sm leading-5 text-gray-900 dark:text-gray-300">
          {amount}
        </p>
      </div>
    </div>
  );
};
