import { useState } from 'react';
import './CDE.css'

export const E = ({
    data,
    onWin
}) => {

  const [userAnswer, setUserAnswer] = useState('')
  console.log(data)

    /* -------------------------------------------------------- */

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const checkAnswer = () => {

        if(userAnswer === data[2]){
            onWin()
        } else {
            console.log('wrong userAnswer')
        }
    }

    /* -------------------------------------------------------- */

    return (
    <div className='big-container'>
        <div className="cde-question-container">
            <p className="cde-text">
            {showMistake ? data[2] : data[0]}
            </p>
        </div>

{showMistake ? <></> :
        <div className="cde-main-container">
            <input onChange={handleInputChange} id='answer' type='text' placeholder='Your Translation Here'/>

            <button onClick={checkAnswer}>checkAnswer</button>
        </div>}
    </div>
  )
}
