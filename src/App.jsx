import './App.css';
import { Header } from './Components';
import { Home } from './Pages';
import { useThemeContext } from './hooks';

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${theme} ${
        theme === 'dark' ? 'bg-[#121212]' : null
      } min-h-[100vh]`}
    >
      <Header />
      <Home />
    </div>
  );
}

export default App;
