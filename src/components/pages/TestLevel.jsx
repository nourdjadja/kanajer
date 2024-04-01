import {Timer} from "../Timer"

export const TestLevel = ({
    isOpen,
    difficulty,
    handleDismount,
    
}) => {
    if(!isOpen){
        return(<></>)
    } else {
        return (
            <div className='popover-set'>
                <button className='relative-left-return' onClick={handleDismount}>ret</button>
                <div className="big-container">
                    <p className="main-text">TESTLEVEL {difficulty}</p>
                    <Timer/>
                </div>
            </div>
        )
    }
}
