import { useThemeChanger } from '../../hooks/use-theme-changer';

interface UserAvatarProps {
  value: string;
}

const FALLBACK_LETTER = 'Z';

export const UserAvatar = ({ value }: UserAvatarProps) => {
  const { theme } = useThemeChanger();
  return (
    <div
      className={`flex justify-center items-center rounded-full  w-16 h-16 ${randomBgColor(
        theme
      )}`}
    >
      <span className="text-white dark:text-gray-900">
        {value ? value[0].toUpperCase() : FALLBACK_LETTER}
      </span>
    </div>
  );
};

export const randomBgColor = (theme: string | undefined) => {
  const darkModeColors = [
    'bg-slate-300',
    'bg-gray-200',
    'bg-blue-200',
    'bg-zinc-200',
    'bg-yellow-100',
    'bg-pink-200',
    'bg-red-300',
  ];
  const colors = [
    'bg-red-300',
    'bg-blue-300',
    'bg-lime-500',
    'bg-teal-500',
    'bg-violet-500',
    'bg-pink-500',
    'bg-cyan-500',
  ];

  const randomNumber = ~~(Math.random() * colors.length);

  return theme === 'light'
    ? colors[randomNumber]
    : darkModeColors[randomNumber];
};
