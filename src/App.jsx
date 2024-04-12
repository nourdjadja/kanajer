import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar.jsx';
import { Login } from './components/pages/Login.jsx';
import { Menu } from './components/pages/Menu.jsx';
import { levels } from './scripts/levels.js'
import {hashPassword} from './scripts/hashPassword.js'
import {getUserDataFromDB, loginTest} from './scripts/connect.js'
import { useUserContext } from './UserContext.jsx';

function App() {

  const { variables, updateVariables } = useUserContext();

  const [loginOk, setLoginOk] = useState(false)
  const [showCredentialError, setShowCredentialError] = useState(false);

  const handleLogin = async (usernameInput, pwdInput) => {
    const hashedPwd = hashPassword(pwdInput);
  
    try {
      const success = await loginTest(usernameInput, hashedPwd);
  
      if (success) {
        const userData = await getUserDataFromDB(usernameInput);
  
        if (userData) {
          updateVariables({
            username: userData.username,
            scores: userData.scores
          });

          setLoginOk(true);
        } else {
          setShowCredentialError(true);
        }
      } else {
        setShowCredentialError(true);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
    }
  };
  
  return (
    <div className="App">
        <Navbar isShown={loginOk} />
        <Login showCredentialError={showCredentialError} loginFunction={handleLogin} isOpen={!loginOk} />
        <Menu levelList={levels} isOpen={loginOk} />
        <button style={{position:'fixed', zIndex:'1000', width:"100%"}} onClick={() => console.log(variables)}></button>
    </div>
  );
}

export default App;