import { useFormContext } from 'react-hook-form';

const cards = ['MASTERCARD', 'VISA'];

interface SelectProps {
  name: string;
  label: string;
}

export const Select = ({ name, label }: SelectProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className="text-black dark:text-white">
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        className=" border rounded w-full py-2 px-3 bg-white text-black dark:bg-gray-900 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
      >
        {cards.map((card) => {
          return <option key={card}>{card}</option>;
        })}
      </select>
    </div>
  );
};
