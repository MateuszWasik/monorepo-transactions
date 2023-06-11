import { ThemeChanger } from '../theme-changer/theme-changer';

export const Header = () => {
  return (
    <nav className="flex justify-end">
      <ThemeChanger />
    </nav>
  );
};
