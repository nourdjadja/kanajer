import { useState, useEffect } from "react"
import "./Login.css"

export const Login = ({
    isOpen,
    loginFunction,
    showCredentialError
}) => {

    const [introSeen, setIntroSeen] = useState(false);
    const [introClicked, setIntroClicked] = useState(false);

    const [usernameInput, setUsernameInput] =  useState('');
    const [pwdInput, setPwdInput] = useState('');

    const handleUsernameInputChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handlePwdInputChange = (e) => {
        setPwdInput(e.target.value);
    }

  if(!isOpen && introSeen){
    return (<></>)
  } else if (!introSeen && isOpen) {
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
                    <input onChange={handleUsernameInputChange} type="text" name="username" id="username" />
                </label>

                <label htmlFor="password">
                    <p className="smallest-text">Password</p>
                    <input onChange={handlePwdInputChange} type="text" name="password" id="password"/>
                </label>

                <div className="buttons-container">
                    <button className="smallest-text" onClick={() => loginFunction(usernameInput, pwdInput)} type="button">Log in</button>
                    <button className="smallest-text" type="button">Register</button> 
                </div>

                {showCredentialError ? <p style={{color:'red'}}>Login Error</p> : <></>}
            </form>

            <div className="legals">
                <a href="">GUC</a>
            </div>
        </div>
        </div>
    )
  }
}
