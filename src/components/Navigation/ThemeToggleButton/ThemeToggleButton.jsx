import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useLayoutEffect, useState, useCallback } from 'react';
import { ThemeButton } from './ThemeToggleButton.styled';

const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme ? theme === 'dark' : true;
  });

  const updateTheme = useCallback(isDark => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  useLayoutEffect(() => {
    updateTheme(isDark);
  }, [isDark, updateTheme]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  return (
    <ThemeButton onClick={toggleTheme}>
      {!isDark ? <MdDarkMode /> : <MdLightMode />}
    </ThemeButton>
  );
};

export default DarkModeSwitch;
