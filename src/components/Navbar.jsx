import { useState } from 'react'
import './Navbar.css'
import { Settings } from './pages/Settings'
import { UserManagement } from './pages/UserManagement'

export const Navbar = ({
    isShown,
    onLogout 
}) => {

    const [areSettingsOpen, setAreSettingsOpen] = useState(false);
    const [isUserManagementOpen, setIsUserManagementOpen] = useState(false);

    if(!isShown){
        return <></>
    } else {
        return (
            <nav>
                <div>
                    <a className='main-text'>KANAJER</a>
                </div>
        
                <div>
                    <button className='nb-button' type="button" onClick={() => setIsUserManagementOpen(true)}>
                        <img src="image/timer.svg"/>
                    </button>
                    <button className='nb-button' type="button" onClick={() => setAreSettingsOpen(true)}>
                        <img src="image/settings.svg" alt="STNGS"/>
                    </button>
                    <button className='nb-button' type="button" onClick={onLogout}>
                        <img src="image/logout.svg" alt="OUT"/>
                    </button>
                
                    <Settings handleDismount={() => setAreSettingsOpen(false)} isOpen={areSettingsOpen}/> 
                    <UserManagement handleDismount={() => setIsUserManagementOpen(false)} isOpen={isUserManagementOpen}/>
                </div>
            </nav>
          )
    }
}
