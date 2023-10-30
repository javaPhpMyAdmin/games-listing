import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { getItemLocalStorage } from '@/Helpers';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setTheme(getItemLocalStorage('theme') ?? '');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
