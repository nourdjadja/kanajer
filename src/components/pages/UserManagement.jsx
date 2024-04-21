import { useUserContext } from '../../UserContext'
import { calculateTotalExp, masteryCalculator } from '../../scripts/levelCalculator'
import './UserManagement.css'
import { getBestTime } from '../../scripts/levels'


export const UserManagement = ({
  isOpen,
  handleDismount
}) => {
  
  const {userVar} = useUserContext()

  if(!isOpen){
    return <></>
  } else {
    return (
      <div className='popover-set'>
        <button style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"none"
        }} className='absolute-left-return' onClick={handleDismount}>
          <img style={{
            width:"50px",
            height:"50px"
          }} src="image/toLeft.svg" alt="back"/>
        </button>

        <div className='big-container'>
          <div className='um-header'>
            <p className="main-text">
              {userVar.username}
            </p>
            <p className="small-text">
              Level {masteryCalculator(calculateTotalExp(userVar.scores))}
            </p>
          </div>

          <div className="um-main">

          <div className="score-container">
            <p className='a smallest-text'>Kana Starter !</p>
            {!getBestTime(userVar.scores.scores[0]) ? <p className='d smallest-test'>Not yet done!</p> : (
              <>             
                <div className="b data-container">
                  <p className='data'>{userVar.scores.scores[0][1][1]}</p>
                  <p className='data'>{userVar.scores.scores[0][1][2]}</p>
                </div>

                <p className='c small-text'>{getBestTime(userVar.scores.scores[0])}ms</p>
              </>
            )}
          </div>

          <div className="score-container">
            <p className='a smallest-text'>Kana Learner</p>
            {!getBestTime(userVar.scores.scores[1]) ? <p className='d smallest-test'>Not yet done!</p> : (
              <>             
                <div className="b data-container">
                  <p className='data'>{userVar.scores.scores[1][1][1]}</p>
                  <p className='data'>{userVar.scores.scores[1][1][2]}</p>
                </div>
                <p className='c small-text'>{getBestTime(userVar.scores.scores[1])}ms</p>
              </>
            )}
          </div>

          <div className="score-container">
            <p className='a smallest-text'>Kana Juggler</p>
            {!getBestTime(userVar.scores.scores[2]) ? <p className='d smallest-test'>Not yet done!</p> : (
              <>   
                <div className="b data-container">
                  <p className='data'>{userVar.scores.scores[2][1][1]}</p>
                  <p className='data'>{userVar.scores.scores[2][1][2]}</p>
                </div>
                <p className='c small-text'>{getBestTime(userVar.scores.scores[2])}ms</p>
              </>
            )}
          </div>

          <div className="score-container">
            <p className='a smallest-text'>Kanajer !</p>
            {!getBestTime(userVar.scores.scores[3]) ? <p className='d smallest-test'>Not yet done!</p> : (
              <>             
                <div className="b data-container">
                  <p className='data'>{userVar.scores.scores[3][1][1]}</p>
                  <p className='data'>{userVar.scores.scores[3][1][2]}</p>
                </div>
                <p className='c small-text'>{getBestTime(userVar.scores.scores[3])}ms</p>
              </>
            )}
          </div>
          
          </div>
        </div>
      </div>
    )
  }
}