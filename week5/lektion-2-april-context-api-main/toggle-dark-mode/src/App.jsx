import { useState, createContext } from 'react';
import './App.css';

const ThemeContext = createContext(undefined);
const UpdateThemeContext = createContext(undefined);

import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <UpdateThemeContext.Provider value={setTheme}>
          <ToggleTheme />
          <LoginForm />
        </UpdateThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, UpdateThemeContext };

export default App;
