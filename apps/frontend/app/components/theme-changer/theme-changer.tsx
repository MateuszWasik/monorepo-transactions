import { useThemeChanger } from '../../hooks/use-theme-changer';
import React from 'react';
import { MoonIcon } from '../../assets/moon-icon';
import { SunIcon } from '../../assets/sun-icon';

export const ThemeChanger = () => {
  const { changeTheme, theme } = useThemeChanger();

  return (
    <div className="flex justify-end items-center">
      <div className="mr-2">
        <SunIcon theme={theme} />
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          className="sr-only peer"
          onChange={changeTheme}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </label>
      <div className="ml-2">
        <MoonIcon theme={theme} />
      </div>
    </div>
  );
};
