import {ClickableBox} from '../ClickableBox'
import './AB.css'
import { generateRNG } from '../../scripts/generateRng'
import { useState } from 'react';

export const A = ({
    data,
    onWin,
    onPass,
    kanaType
}) => {

    const rng = generateRNG(4, 0);
    let rightAnswer = data[rng]

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
            }, 5000);
        }
    }

    /* -------------------------------------------------------- */

    return (
    <div className='ab'>

        <div className="ab-question-container">
            <p className="main-text ">
                {showMistake ? rightAnswer[kanaType] : rightAnswer[2]}
            </p>
        </div>
        {showMistake ? <></> :
        <div className="ab-main-container">
            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[0])}>
                    {data[0][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[1])}>
                    {data[1][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[2])}>
                    {data[2][kanaType]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[3])}>
                    {data[3][kanaType]}
                </ClickableBox>
            </div>
        </div>}

    </div>
  )
}
