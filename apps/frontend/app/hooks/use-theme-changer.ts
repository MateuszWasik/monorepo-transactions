import { useTheme } from 'next-themes';

export const useThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeOnChange = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  return { changeTheme: handleThemeOnChange, theme };
};
