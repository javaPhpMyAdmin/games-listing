import './App.css';
import { Header } from '@/Components';
import { Home } from '@/Pages';
import { useThemeContext } from '@/hooks';
import { GamesProvider } from '@/Context';

function App() {
  const { theme } = useThemeContext();

  return (
    <GamesProvider>
      <div
        className={`${theme} ${
          theme === 'dark' ? 'bg-[#121212]' : null
        } min-h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </GamesProvider>
  );
}

export default App;
