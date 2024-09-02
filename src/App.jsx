import { useState, useEffect } from 'react';
import './App.css'
import { Navbar } from './components/Navbar.jsx';
import { Login } from './components/pages/Login.jsx';
import { Menu } from './components/pages/Menu.jsx';
import { levels } from './scripts/levels.js'
import { hashPassword } from './scripts/hashPassword.js'
import { getUserDataFromDB, loginTest } from './scripts/connect.js'
import { useUserContext } from './UserContext.jsx';


function App() {

    const { userVar, updateUserVar } = useUserContext();
    const [showCredentialError, setShowCredentialError] = useState(false);

    useEffect(() => {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            updateUserVar(userData);
        }
    }, [updateUserVar]);

    const handleLogin = async (usernameInput, pwdInput) => {
        const hashedPwd = hashPassword(pwdInput);

        try {
            const success = await loginTest(usernameInput, hashedPwd);

            if (success) {
                const userData = await getUserDataFromDB(usernameInput);

                if (userData) {
                    updateUserVar({
                        username: userData.username,
                        id: userData.id,
                        scores: userData.scores,
                        isLoggedIn: true
                    });

                    localStorage.setItem('userData', JSON.stringify({
                        username: userData.username,
                        id: userData.id,
                        scores: userData.scores,
                        isLoggedIn: true
                    }));

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

    const handleLogout = () => {
        localStorage.removeItem('userData');
        updateUserVar({
            username: undefined,
            id: undefined,
            scores: undefined,
            isLoggedIn: false
        });
    };

    return (
        <div className="App">
            <Navbar isShown={userVar.isLoggedIn} onLogout={handleLogout} />
            <Login showCredentialError={showCredentialError} loginFunction={handleLogin} isOpen={!userVar.isLoggedIn} />
            <Menu levelList={levels} isOpen={userVar.isLoggedIn} />
        </div>
    );
}

export default App;
