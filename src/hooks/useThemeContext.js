import { useContext } from 'react';
import { ThemeContext } from '../Context';

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}
