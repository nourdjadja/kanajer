import { useState } from 'react';
import './CDE.css'

export const C = ({
    data,
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

        if(answer === data[2]){
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
    <div className='big-container'>
        <div className="cde-question-container">
            <p className="cde-text">
                {showMistake ? data[2] : data[kanaType]}
            </p>
        </div>

{showMistake ? <></> :
        <div className="cde-main-container">
            <input onChange={handleInputChange} id='answer' type='text' placeholder='Your Romaji Here'/>
            <button onClick={checkAnswer}>checkAnswer</button>
        </div>}
    </div>
  )
}
