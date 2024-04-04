import { useState, createContext } from 'react';
import './App.css';

const UserContext = createContext(undefined);
const ChangeUsernameContext = createContext(undefined);

import ChangeUsername from './components/ChangeUsername/ChangeUsername';
import DisplayUsername from './components/DisplayUsername/DisplayUsername';

function App() {
  const [username, setUsername] = useState('Ada');

  return (
    <main>
      <UserContext.Provider value={username}>
        <ChangeUsernameContext.Provider value={setUsername}>
          <ChangeUsername />
          <DisplayUsername />
        </ChangeUsernameContext.Provider>
      </UserContext.Provider>
    </main>
  );
}

export { UserContext, ChangeUsernameContext };

export default App;
