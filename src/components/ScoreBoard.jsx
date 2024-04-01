import './ScoreBoard.css'
import {getScores} from './scripts/fetchOnline';

export const ScoreBoard = ({
  isOpen,
  handleDismount
}) => {
  if(!isOpen){
    return <></>
  } else {
    return (
      <div className='popover-set'>
        <button className='absolute-left-return' onClick={handleDismount}>return</button>
        <div className='big-container'>
          <div className='sb-header'>
              <div>INDIVIDUAL</div> {/*Personnal Score Board*/}
              <div>GLOBAL</div> {/*Global Score Board*/}
          </div>
  
          <div className='sb-main'>TABLE</div>
  
          <div className='sb-footer'>HIGH SCORE</div>
        </div>
      </div>
    )
  }
}