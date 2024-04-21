import {ClickableBox} from '../ClickableBox'
import { generateRNG } from '../../scripts/generateRng'
import './AB.css'
import { useState } from 'react'

export const B = ({
    Bdata,
    onWin,
    onPass,
    kanaType
}) => {

    const rng = generateRNG(4, 0);
    let rightAnswer = Bdata[rng]

    const [showMistake, setShowMistake] = useState(false)

    /* -------------------------------------------------------- */

    const checkAnswer = (answer) => {
        if(answer === rightAnswer){
            onWin()
            rightAnswer = null;
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
            <p className="main-text">
                {showMistake ? <>{rightAnswer[2]} -{'>'} {rightAnswer[kanaType]}</> : rightAnswer[kanaType]}
            </p>
        </div>

        {showMistake ? <></> :

            <div className="ab-main-container">

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Bdata[0])}>
                    {Bdata[0][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Bdata[1])}>
                    {Bdata[1][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Bdata[2])}>
                    {Bdata[2][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox soundPlayed={'/selectAnswer.mp3'} optionClasses={"ab-pick"} handleClick={() => checkAnswer(Bdata[3])}>
                    {Bdata[3][2]}
                </ClickableBox>
            </div>

        </div>}


    </div>
  )
}
