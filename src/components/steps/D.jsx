import { useState } from 'react';
import './CDE.css'

export const D = ({
    Ddata,
    onWin,
    onPass
}) => {

  const [answer, setAnswer] = useState('')
  const [showMistake, setShowMistake] = useState(false)

  console.log(Ddata)

    /* -------------------------------------------------------- */

    const handleInputChange = (e) => {
      setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        if(answer.toLowerCase() == Ddata[1]){
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
            {showMistake ? <>{Ddata[0]} -{'>'} {Ddata[1]}</> : Ddata[0]}
            </p>
        </div>

    {showMistake ? <></> :
        <div className="cde-main-container">
            <input onChange={handleInputChange} id='answer' type='text' placeholder='Your Romaji Here'/>

            <button className='check-container' onClick={checkAnswer}>
                <img className='check' src="/image/check.svg" alt="check" />
            </button>
        </div>}

        <button onClick={onPass} className="step-pass relative-bottom-right-pass">
            Pass
        </button>
    </div>
  )
}
