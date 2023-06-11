import { Select } from './select';
import { TextInput } from './text-input';
import { useForm, FormProvider } from 'react-hook-form';
import { Transaction } from "@monorepo/shared-types";

type FormTransaction = {
  card: string,
  amount: number,
  merchant: string,

}

interface FormProps {
  handleOnFormSubmit: (newTransaction: Transaction) => void;
}

export const Form = ({handleOnFormSubmit}: FormProps) => {
  const formInstance = useForm<FormTransaction>();

  return (
    <FormProvider {...formInstance} >
      <form onSubmit={formInstance.handleSubmit(handleOnFormSubmit)}>
        <Select name="card" label="Card used" />
        <TextInput name="amount" label="Amount" />
        <TextInput name='merchant' label="Merchant name" />
        <button type="submit">Add new transaction</button>
      </form>
    </FormProvider>
  );
};
