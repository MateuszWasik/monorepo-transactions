import Image from 'next/image';
import { Transaction } from '@monorepo/shared-types';

export const TransactionCard = ({
  id,
  name,
  amount,
  merchant,
  date,
}: Transaction) => {
  return (
    <div className="flex justify-between min-w-0 gap-x-6 py-5 px-5 rounded-md bg-white">
      <div className="flex gap-x-4">
        <Image
          className="rounded-full"
          src={merchant.avatarUrl}
          alt=""
          height={50}
          width={50}
          priority={true}
        />
        <div className="min-w-0 flex-auto px-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {merchant.name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {name}
          </p>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{amount}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{date}</p>
      </div>
    </div>
  );
};
