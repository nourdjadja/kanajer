import { useState } from 'react';
import './CDE.css'

export const C = ({
    Cdata,
    onWin,
    kanaType,
    onPass
}) => {

    const [answer, setAnswer] = useState('')
    const [showMistake, setShowMistake] = useState(false)


    /* -------------------------------------------------------- */

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
      };

    const checkAnswer = () => {

        if(answer.toLowerCase() == Cdata[2]){
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
    <div className='big-container'>
        <div className="cde-question-container">
            <p className="cde-text">
                {showMistake ? <>{Cdata[kanaType]} -{'>'} {Cdata[2]}</> : Cdata[kanaType]}
            </p>
        </div>

{showMistake ? <></> :
        <div className="cde-main-container">
            <input onChange={handleInputChange} id='answer' type='text' placeholder='Your Romaji Here'/>
            <button className='check-container' onClick={checkAnswer}>
                <img className='check' src="/image/check.svg" alt="check"/>
            </button>
        </div>}

        <button onClick={onPass} className="step-pass relative-bottom-right-pass">
            Pass
        </button>
    </div>
  )
}
