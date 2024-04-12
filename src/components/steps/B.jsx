import {ClickableBox} from '../ClickableBox'
import { generateRNG } from '../../scripts/generateRng'
import './AB.css'
import { useState } from 'react'

export const B = ({
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
            <p className="main-text">
                {showMistake ? rightAnswer[2] : rightAnswer[kanaType]}
            </p>
        </div>

        {showMistake ? <></> :

            <div className="ab-main-container">

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[0])}>
                    {data[0][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[1])}>
                    {data[1][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[2])}>
                    {data[2][2]}
                </ClickableBox>
            </div>

            <div className="ab-pick-container">
                <ClickableBox optionClasses={"ab-pick"} handleClick={() => checkAnswer(data[3])}>
                    {data[3][2]}
                </ClickableBox>
            </div>

        </div>}
    </div>
  )
}
