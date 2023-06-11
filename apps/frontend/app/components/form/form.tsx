import { Select } from './select';
import { TextInput } from './text-input';
import { useForm, FormProvider } from 'react-hook-form';
import { Transaction } from '@monorepo/shared-types';

type FormTransaction = {
  card: string;
  amount: number;
  merchant: string;
};

interface FormProps {
  handleOnFormSubmit: (newTransaction: Transaction) => void;
}

export const Form = ({ handleOnFormSubmit }: FormProps) => {
  const formInstance = useForm<FormTransaction>();

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={formInstance.handleSubmit(handleOnFormSubmit)}>
        <div className="flex flex-col gap-4">
          <Select name="card" label="Card used" />
          <TextInput name="amount" label="Amount" />
          <TextInput name="merchant" label="Merchant name" />
          <div className=" flex justify-end">
            <button type="submit" className="text-black dark:text-white">
              Add new transaction
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
