import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const useThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  const handleThemeOnChange = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  return { changeTheme: handleThemeOnChange, theme };
};
