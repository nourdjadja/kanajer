import { useState, useEffect } from 'react'
import './Navbar.css'
import { ScoreBoard } from './ScoreBoard'
import { Settings } from './pages/Settings'
import { User } from './pages/User'

export const Navbar = ({
    handleBackToMenu,
    isShown
}) => {

    const [isScoreBoardOpen, setIsScoreBoardOpen] = useState(false);
    const [areSettingsOpen, setAreSettingsOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
            setIsScoreBoardOpen(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, []);


    if(!isShown){
        return <></>
    } else {
        return (
            <nav onKeyDown={handleEscapeKeyPress}>
                <div>
                    <a style={{cursor:"pointer"}} onClick={handleBackToMenu} className='main-text'>KANAJER</a>
                </div>
        
                <div>
                    <button type="button" onClick={() => setIsUserOpen(true)}>
                        <img src="#" alt="user"/>
                    </button>
                    <button type="button" onClick={() => setAreSettingsOpen(true)}>
                        <img src="#" alt="settings"/>
                    </button>
        
                    <button type="button" onClick={() => setIsScoreBoardOpen(true)}>
                        <img src="#" alt="score"/>
                    </button> 
                
                    <ScoreBoard handleDismount={() => setIsScoreBoardOpen(false)} isOpen={isScoreBoardOpen}/> 
                    <Settings handleDismount={() => setAreSettingsOpen(false)} isOpen={areSettingsOpen}/> 
                    <User handleDismount={() => setIsUserOpen(false)} isOpen={isUserOpen}/>
                </div>
            </nav>
          )
    }
}
