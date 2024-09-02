/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Login.css"
import { getUserDataFromDB, sendRegisterDataToDB } from "../../scripts/connect";
import { CGU } from "./CGU";

export const Login = ({
    isOpen,
    loginFunction,
    showCredentialError
}) => {

    const [introSeen, setIntroSeen] = useState(false);
    const [introClicked, setIntroClicked] = useState(false);

    const [waitPlease, setWaitPlease] = useState(false)

    const [usernameInput, setUsernameInput] =  useState('');
    const [pwdInput, setPwdInput] = useState('');

    const [registerOpen, setRegisterOpen] = useState(false)
    const [passwordError, setPassWordError] = useState(false)
    
    const [usernameAlreadyUsed, setUsernameAlreadyUsed] = useState(false)
    const [usernameLengthError, setUsernameLengthError] = useState(false)

    const [TOSOpen, setTOSOpen] = useState(false);

    const handleUsernameInputChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handlePwdInputChange = (e) => {
        setPwdInput(e.target.value);
    }

    const isValidPassword = (pwd) => {
        if (pwd.length < 12) {
            return false;
        }
    
        const specialCharRegex = /[!@#$%^&*_]/;
        const numberRegex = /[0-9]/; 
        const upperCaseRegex = /[A-Z]/; 
        const lowerCaseRegex = /[a-z]/; 
    
        if (!specialCharRegex.test(pwd) || !numberRegex.test(pwd) || !upperCaseRegex.test(pwd) || !lowerCaseRegex.test(pwd)) {
            return false;
        }

        return true;
    };

    const testRegister = async () => {
        let username = usernameInput;
        let pwd = pwdInput;
    
        setPassWordError(false)
        setUsernameLengthError(false)
        setUsernameAlreadyUsed(false)

        if(username.length < 4 || username.length > 15){
            setUsernameLengthError(true)
            return false;
        }

        if(!isValidPassword(pwd)){
            setPassWordError(true)
            return false
        }

        const userData = await getUserDataFromDB(username)

        if (userData){
            setUsernameAlreadyUsed(true)
            return false;
        }

        sendRegisterDataToDB(username, pwd);
        setWaitPlease(true)
        setTimeout(() => {
            loginFunction(username, pwd);
            setIntroClicked(false)
            setIntroSeen(false)
            setPassWordError(false)
            setPwdInput('')
            setUsernameAlreadyUsed(false)
            setUsernameInput('')
            setWaitPlease(false)
            setRegisterOpen(false)
            setUsernameLengthError(false)
            setTOSOpen(false)
        }, 5000);
    }

  if(!isOpen && introSeen){
    return null
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

            {waitPlease ? <><p className="main-text">Logging in.</p><br /><p className="small-text">Please, wait.</p></> : (!registerOpen ? <>
                <p className="main-text">Please, log in.</p>

                <form>

                    <label htmlFor="username">
                        <p className="smallest-text">Username</p>
                        <input onChange={handleUsernameInputChange} type="text" name="username" id="username" />
                    </label>

                    <label htmlFor="password">
                        <p className="smallest-text">Password</p>
                        <input onChange={handlePwdInputChange} type="password" name="password" id="password"/>
                    </label>

                    <div className="buttons-container">
                        <button className="smallest-text" onClick={() => loginFunction(usernameInput, pwdInput)} type="button">Log in</button>
                        <button className="smallest-text" onClick={() => setRegisterOpen(true)} type="button">Register</button> 
                    </div>

                    {showCredentialError ? <p style={{color:'red'}}>Login Error</p> : <></>}
                </form>
                <div className="legals">
                <h3 className="smallest-text" style={{textDecoration:'underline',cursor:'pointer'}} onClick={() => setTOSOpen(true)}>Terms of Services</h3>
                        </div>
            </> : <><form>
                    <label htmlFor="username">
                        <p className="smallest-text">Pick a Username</p>
                        <input onChange={handleUsernameInputChange} type="text" name="register-username" id="register-username" />
                    </label>

                    <label htmlFor="password">
                        <p className="smallest-text">Create a Password</p>
                        <input onChange={handlePwdInputChange} type="password" name="register-password" id="register-password"/>
                    </label>

                    <button onClick={() => testRegister()} className="smallest-text" type="button">Create Account</button>
                    {usernameAlreadyUsed ? <p style={{color:'red'}}>Username already used</p>  : <></>}
                    {usernameLengthError ? <p style={{color:'red'}}>Username should be 4-15 characters long.</p>  : <></>}
                    {passwordError ? <p style={{color:'red'}}>Your password should contain 12 characters, an UPPERCASE, a lowercase, a digit and a symbol from this list : ! @ # $ % ^ & * _</p>  : <></>}
                </form>
                <button style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    border:"none"
                }} className='absolute-left-return' onClick={() => setRegisterOpen(false)}>
                    <img src="/image/toLeft.svg" style={{
                        width:"50px"
                    }} alt="Back" srcSet="" />
                </button>
                    <div className="legals">
                        <h3 className="smallest-text" style={{textDecoration:'underline', cursor:'pointer'}} onClick={() => setTOSOpen(true)}>Terms of Services</h3>
                    </div></>
                )}
        </div>
        <CGU handleDismount={() => setTOSOpen(false)} isOpen={TOSOpen}/>
        </div>
    )
  }
}
