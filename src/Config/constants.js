const GAMES_API_KEY = import.meta.env.VITE_API_KEY;

export const config = {
  BASE_URL: 'https://api.rawg.io/api',
  API_KEY: GAMES_API_KEY,
  API_ROUTES: {
    GENRES: '/genres',
    GAMES: '/games',
  },
};
