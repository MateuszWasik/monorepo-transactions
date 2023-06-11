import { useFormContext } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
}

export const TextInput = ({ name, label }: TextInputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name)} />
    </div>
  );
};
