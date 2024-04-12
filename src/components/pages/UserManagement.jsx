import { useUserContext } from '../../UserContext'
import { calculateTotalExp, masteryCalculator } from '../../scripts/levelCalculator'
import './UserManagement.css'
import {getUserDataFromDB} from '../../scripts/connect'
import { getBestTime } from '../../scripts/levels'


export const UserManagement = ({
  isOpen,
  handleDismount
}) => {
  
  const {variables,updateVariables} = useUserContext()

  const handleRefreshClick = async () => {
    const userData = await getUserDataFromDB(variables.username);
    if (userData) {
        updateVariables({
        username: userData.username,
        scores: userData.scores
      });
    }
  }

  if(!isOpen){
    return <></>
  } else {
    return (
      <div className='popover-set'>
        <button className='absolute-left-return' onClick={handleDismount}>ret</button>
        <button className='absolute-right-refresh' onClick={handleRefreshClick}>refresh</button>

        <div className='big-container'>
          <div className='um-header'>
            <p className="main-text">
              {variables.username}
            </p>
            <p className="small-text">
              Level {masteryCalculator(calculateTotalExp(variables.scores))}
            </p>
          </div>

          <div className="um-main">

          <div className="score-container">
            <p className='smallest-text'>Kana Starter !</p>
            {!getBestTime(variables.scores.scores[0]) ? <p className='smallest-test'>Not yet done!</p> : (
              <p className='small-text'>{getBestTime(variables.scores.scores[0])}ms</p>
            )}
          </div>

          <div className="score-container">
            <p className='smallest-text'>Kana Learner</p>
            {!getBestTime(variables.scores.scores[1]) ? <p className='smallest-test'>Not yet done!</p> : (
              <p className='small-text'>{getBestTime(variables.scores.scores[1])}ms</p>
            )}
          </div>

          <div className="score-container">
            <p className='smallest-text'>Kana Juggler</p>
            {!getBestTime(variables.scores.scores[2]) ? <p className='smallest-test'>Not yet done!</p> : (
              <p className='small-text'>{getBestTime(variables.scores.scores[2])}ms</p>
            )}
          </div>

          <div className="score-container">
            <p className='smallest-text'>Kanajer !</p>
            {!getBestTime(variables.scores.scores[3]) ? <p className='smallest-test'>Not yet done!</p> : (
              <p className='small-text'>{getBestTime(variables.scores.scores[3])}ms</p>
            )}
          </div>
          
          </div>
        </div>
      </div>
    )
  }
}