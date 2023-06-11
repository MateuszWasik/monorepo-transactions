import { useFormContext } from 'react-hook-form';

const cards = ['MASTERCARD', 'VISA'];

interface SelectProps {
  name: string;
  label: string
}

export const Select = ({ name, label }: SelectProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        {cards.map((card) => {
          return <option key={card}>{card}</option>;
        })}
      </select>
    </div>
  );
};
