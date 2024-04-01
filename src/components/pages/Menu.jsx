import { useState, useEffect } from 'react';
import { ClickableBox } from '../ClickableBox';
import './Menu.css';
import { TestLevel } from './TestLevel';

export const Menu = ({ isShown, levelList }) => {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);
  const [isLevelOpen, setIsLevelOpen] = useState(false);

  const handleClick = (index) => {
    setSelectedBoxIndex(index);
    setIsLevelOpen(true);
  };

  
  const handleEscapeKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsLevelOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyPress);
    return () => {
        document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, []);

  const handleCloseLevel = () => {
    setIsLevelOpen(false);
  }
  
  const onTimerClose = (data) => {
    console.log("Données du Timer :", data);
    // Faites ce que vous voulez avec les données du Timer ici
  };

  if (!isShown) {
    return <></>;
  } else {
    return (
      <div className="popover-set">
        <div className='menu-grid'>
          {levelList.map((level, index) => (
            <div className="level-box-container" key={index}>
              <ClickableBox
                handleClick={() => handleClick(index)}
                optionClasses={selectedBoxIndex === index ? 'level-box selected' : 'level-box'}
                key={index}
              >
                <p className='small-text'>
                  {level.name}
                </p>
              </ClickableBox>
            </div>
          ))}
        </div>
        
        {isLevelOpen ? 
          <TestLevel onTimerClose={() => onTimerClose} handleDismount={() => handleCloseLevel()} difficulty={levelList[selectedBoxIndex].difficulty} isOpen={isLevelOpen}/> : <></>
        }
      </div>
    );
  }
};
