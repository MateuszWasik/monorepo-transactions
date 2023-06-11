import { useFormContext } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
}

export const TextInput = ({ name, label }: TextInputProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className="text-black dark:text-white">
        {label}
      </label>
      <input
        {...register(name)}
        id={name}
        className="appearance-none border rounded w-full py-2 px-3 bg-white text-black dark:bg-gray-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
