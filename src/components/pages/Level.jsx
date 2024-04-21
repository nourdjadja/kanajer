import { useState, useRef, useEffect } from 'react';
import { A } from '../steps/A';
import { B } from '../steps/B';
import { C } from '../steps/C';
import { D } from '../steps/D';
import { E } from '../steps/E';

import { fourChoices } from "../../scripts/fourChoice"
import { generateRNG, generateKanaData, generateWordData } from '../../scripts/generateRng';
import { sendLevelDataToDB } from '../../scripts/connect';
import { useUserContext } from '../../UserContext';
import { getDateFormatedFromNow } from '../../scripts/getDateFormated';



export const Level = ({ isOpen, difficulty, handleDismount, sequence }) => {

    const [seqPos, setSeqPos] = useState(0);
    const msRef = useRef(0);
    const previousTimeRef = useRef(0);
    const [timerId, setTimerId] = useState(null);
    const [xp, setXp] = useState(0);

    const {userVar} = useUserContext();

    useEffect(() => {
      const animate = (currentTime) => {
        if (previousTimeRef.current !== 0) {
          const deltaTime = currentTime - previousTimeRef.current;
          msRef.current += deltaTime;
          previousTimeRef.current = currentTime;
        } else {
          previousTimeRef.current = currentTime;
        }
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(timerId);
      };
    }, []);
  
    function handleStepPass(){
            setSeqPos(seqPos + 1);
    }

    function handleStepWin(stepId, difficulty) {
        switch (stepId) {
            case 0:
                setXp(xp => xp + 20 * difficulty)
                break;
            case 1:
                setXp(xp => xp + 30 * difficulty)
                break;
            case 2:
                setXp(xp => xp + 40 * difficulty)
                break;
            case 3:
                setXp(xp => xp + 60 * difficulty)
                break;
            case 4:
                setXp(xp => xp + 80 * difficulty)
                break;
        }
      setSeqPos(seqPos + 1);
    }
  
    function getCurrentStep() {
      const currentStep = sequence[seqPos];
      const newFourChoices = fourChoices(difficulty);
  
      if (currentStep === 0) {
        return <A Adata={newFourChoices} onPass={handleStepPass} onWin={() => handleStepWin(0, difficulty)} kanaType={generateRNG(2,0)}/>;
      } else if (currentStep === 1) {
        return <B Bdata={newFourChoices} onPass={handleStepPass} onWin={() => handleStepWin(1, difficulty)} kanaType={generateRNG(2,0)} />;
      } else if (currentStep === 2) {
        return <C Cdata={generateKanaData(generateRNG(96, 0))} onPass={handleStepPass} onWin={() => handleStepWin(2, difficulty)} kanaType={generateRNG(2, 0)} />;
      } else if (currentStep === 3) {
        return <D Ddata={generateWordData(generateRNG(84, 0))} onPass={handleStepPass} onWin={() => handleStepWin(3, difficulty)}/>;
      } else if (currentStep === 4) {
        return <E Edata={generateWordData(generateRNG(84, 0))} onPass={handleStepPass} onWin={() => handleStepWin(4, difficulty)} />;
      } else {

        cancelAnimationFrame(timerId);
        sendLevelDataToDB(userVar.username, [Math.floor(msRef.current), xp, getDateFormatedFromNow()], difficulty, userVar.scores)
                
        return (
          <div className="big-container">
            <p className="main-text">
              TEST DONE
            </p>
            <p className="small-text">
              Time: {Math.floor(msRef.current / 1000)}s
            </p>
            <p className="smallest-text">
              Exp: +{xp}pts !
            </p>
          </div>
        );
      }
    }
  
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className='popover-set'>
        <button style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"none"
        }} className='relative-left-return' onClick={handleDismount}>
          <img style={{
            width:"50px",
            height:"50px"
          }} src="image/undoLeft.svg" alt="BACK" />
        </button>
        
        {getCurrentStep()}
  
      </div>
    );
  };