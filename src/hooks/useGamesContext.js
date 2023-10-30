import { GamesContext } from '@/Context';
import { useContext } from 'react';

export default function useGamesContext() {
  const context = useContext(GamesContext);
  if (!context) throw new Error('Games contex must be used whitin a provider');
  return context;
}
