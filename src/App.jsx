import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar.jsx';
import { Login } from './components/pages/Login.jsx';
import { Menu } from './components/pages/Menu.jsx';
import {levels} from './components/scripts/levels.js'
import { AppContextProvider } from './AppContext.jsx';

import { sequenceGenerator } from './components/scripts/levels.js';

function App() {

  const [isLoginShowed, setIsLoginShowed] = useState(true);

  console.log('Sequence : ' + (sequenceGenerator(4)));

  return (
    <AppContextProvider>
      <div className="App">
        <Navbar isShown={!isLoginShowed} isInLevel={true}/>
        <Login onLoginClickTEST={() => setIsLoginShowed(false)} isShown={isLoginShowed} />
        <Menu levelList={levels} isShown={!isLoginShowed}/>
      </div>
    </AppContextProvider>
  );
}

export default App;