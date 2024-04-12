import { useState } from 'react'
import './Navbar.css'
import { Settings } from './pages/Settings'
import { UserManagement } from './pages/UserManagement'

export const Navbar = ({
    isShown
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
                        <img src="#" alt="USMAN"/>
                    </button>
                    <button className='nb-button' type="button" onClick={() => setAreSettingsOpen(true)}>
                        <img src="#" alt="STNGS"/>
                    </button>
                
                    <Settings handleDismount={() => setAreSettingsOpen(false)} isOpen={areSettingsOpen}/> 
                    <UserManagement handleDismount={() => setIsUserManagementOpen(false)} isOpen={isUserManagementOpen}/>
                </div>
            </nav>
          )
    }
}
