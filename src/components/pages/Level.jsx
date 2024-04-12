import { useState, useRef, useEffect } from 'react';
import { A } from '../steps/A';
import { B } from '../steps/B';
import { C } from '../steps/C';
import { D } from '../steps/D';
import { E } from '../steps/E';

import { fourChoices } from "../../scripts/fourChoice"
import { generateRNG, generateKanaData, generateWordData } from '../../scripts/generateRng';

export const Level = ({ isOpen, difficulty, handleDismount, sequence }) => {
    const [seqPos, setSeqPos] = useState(0);
    const msRef = useRef(0);
    const previousTimeRef = useRef(0);
    const [timerId, setTimerId] = useState(null);
    const [xp, setXp] = useState(0);

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

    function handleStepWin(stepId) {
        switch (stepId) {
            case 0:
                setXp(xp => xp + 20)
                break;
            case 1:
                setXp(xp => xp + 30)
                break;
            case 2:
                setXp(xp => xp + 50)
                break;
            case 3:
                setXp(xp => xp + 80)
                break;
            case 4:
                setXp(xp => xp + 150)
                break;
        }
      setSeqPos(seqPos + 1);
    }
  
    function getCurrentStep() {
      const currentStep = sequence[seqPos];
      const newFourChoices = fourChoices(difficulty);
  
      if (currentStep === 0) {
        return <A data={newFourChoices} onPass={handleStepPass} onWin={() => handleStepWin(0)} kanaType={generateRNG(2,0)}/>;
      } else if (currentStep === 1) {
        return <B data={newFourChoices} onPass={handleStepPass} onWin={() => handleStepWin(1)} kanaType={generateRNG(2,0)} />;
      } else if (currentStep === 2) {
        return <C data={generateKanaData(generateRNG(96, 0))} onPass={handleStepPass} onWin={() => handleStepWin(2)} kanaType={generateRNG(2, 0)} />;
      } else if (currentStep === 3) {
        return <D data={generateWordData(generateRNG(84, 0))} onPass={handleStepPass} onWin={() => handleStepWin(3)}/>;
      } else if (currentStep === 4) {
        return <E data={generateWordData(generateRNG(84, 0))} onPass={handleStepPass} onWin={() => handleStepWin(4)} />;
      } else {
        cancelAnimationFrame(timerId);
  
        return (
          <div className="big-container">
            <p className="main-text">
              TEST DONE
            </p>
            <p className="small-text">
              Time: {Math.floor(msRef.current / 1000)}s
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
        <button className='relative-left-return' onClick={handleDismount}>BACK</button>
        <button className='relative-bottom-right-pass' onClick={handleStepPass}>PASS</button>

        {getCurrentStep()}
  
      </div>
    );
  };