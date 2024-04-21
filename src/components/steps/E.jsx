import { useState } from 'react';
import './CDE.css'

export const E = ({
    Edata,
    onWin,
    onPass
}) => {

  const [answer, setAnswer] = useState('')
  const [showMistake, setShowMistake] = useState(false)

  console.log(Edata)

    /* -------------------------------------------------------- */

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        if(answer.toLowerCase() == Edata[2]){
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
            {showMistake ? <>{Edata[0]} -{'>'} {Edata[2]}</> : Edata[0]}
            </p>
        </div>

{showMistake ? <></> :
        <div className="cde-main-container">
            <input onChange={handleInputChange} id='answer' type='text' placeholder='Your Translation Here'/>

            <button onClick={checkAnswer}>checkAnswer</button>
        </div>}

        <button onClick={onPass} className="step-pass relative-bottom-right-pass">
            Pass
        </button>
    </div>
  )
}
