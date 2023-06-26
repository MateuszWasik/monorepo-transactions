import { Select } from './select';
import { TextInput } from './text-input';
import { FormProvider, useForm } from 'react-hook-form';
import { FormTransaction } from '@monorepo/shared-types';

interface FormProps {
  handleOnFormSubmit: (newTransaction: FormTransaction) => void;
}

export const Form = ({ handleOnFormSubmit }: FormProps) => {
  const formInstance = useForm<FormTransaction>();

  const handleSubmit = (formData: FormTransaction) => {
    console.log(formData);
    const payload = {
      ...formData,
      cardName: formData.cardName,
      merchant: formData.merchantName,
      date: new Date(),
    };

    handleOnFormSubmit(payload);
  };

  return (
    <FormProvider {...formInstance}>
      <form onSubmit={formInstance.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <Select name="cardName" label="Card used" />
          <TextInput name="amount" label="Amount" />
          <TextInput name="merchantName" label="Merchant name" />
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
