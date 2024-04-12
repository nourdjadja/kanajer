import { useState } from 'react';
import './CDE.css'

export const D = ({
    data,
    onWin,
}) => {

  const [answer, setAnswer] = useState('')
  const [showMistake, setShowMistake] = useState(false)

  console.log(data)

    /* -------------------------------------------------------- */

    const handleInputChange = (e) => {
      setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        if(answer == data[1]){
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
                {showMistake ? data[1] : data[0]}
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
