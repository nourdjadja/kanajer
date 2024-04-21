import {ClickableBox} from '../ClickableBox'
import './AB.css'
import { generateRNG } from '../../scripts/generateRng'
import { useState } from 'react';

export const A = ({
    Adata,
    onWin,
    onPass,
    kanaType
}) => {

    const rng = generateRNG(4, 0);
    let rightAnswer = Adata[rng]

    const [showMistake, setShowMistake] = useState(false)

    /* -------------------------------------------------------- */

    const checkAnswer = (answer) => {
        if(answer === rightAnswer){
            rightAnswer = null;
            onWin()
        } else {
            console.log('wrong answer')
            setShowMistake(true)
            setTimeout(() => {
                onPass()
                setShowMistake(false)
            }, 2500);
        }
    }

    /* -------------------------------------------------------- */

    return (
    <div className='ab'>

        <div className="ab-question-container">
            <p className="main-text ">
                {showMistake ? <>{rightAnswer[kanaType]} -{'>'} {rightAnswer[2]}</> : rightAnswer[2]}
            </p>
        </div>
        {showMistake ? <></> :
        <div className="ab-main-container">
            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Adata[0])}>
                    {Adata[0][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Adata[1])}>
                    {Adata[1][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Adata[2])}>
                    {Adata[2][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Adata[3])}>
                    {Adata[3][kanaType]}
                </ClickableBox>
            </div>
        </div>}

    </div>
  )
}
