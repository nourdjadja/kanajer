import { useState } from "react"
import "./Login.css"

export const Login = ({
    isShown,
    onLoginClickTEST
}) => {

    const [introSeen, setIntroSeen] = useState(false);
    const [introClicked, setIntroClicked] = useState(false);


  if(!isShown){
    return (<></>)
  } else if (!introSeen) {
    return (
        <div className="popover-set">
            <div onClick={
                () => {
                    setIntroClicked(true)
                    setTimeout(() => {
                        setIntroSeen(true);
                    }, 1000);
                }
            } className={`intro ${
                introClicked ? "throw-up-down" : ""
            }`}>
                <p className='main-text'>Welcome home, Kanajer !</p>
                <p className="small-text">(Click anywhere to log in)</p>
            </div>
        </div>
    )
  } else {
    return (
        <div className="popover-set">
            <div className="big-container">
            <p className="main-text">Please, log in.</p>

            <form>
                <label htmlFor="username">
                    <p className="smallest-text">Username</p>
                    <input type="text" name="username" id="username" />
                </label>
                <label htmlFor="password">
                    <p className="smallest-text">Password</p>
                    <input type="password" name="password" id="password" />
                </label>

                <div className="buttons-container">
                    <button className="smallest-text" onClick={onLoginClickTEST} type="button">Log in</button>
                    <button className="smallest-text" type="button">Register</button>
                </div>
            </form>

            <div className="legals">
                <a href="">GUC</a>
            </div>
        </div>
        </div>
    )
  }
}
