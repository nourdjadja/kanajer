import { useState } from "react"
import {useAppContext} from "../AppContext"

export const ClickableBox = ({
    children,
    optionClasses,
    handleClick,
    soundPlayed,
}) => {

  const [boxClicked, setBoxClicked] = useState(false)
  const {appVar} = useAppContext();

  const clickBoxHandler = (soundPlayed, volume) => {
    let smallSound = new Audio(soundPlayed)
    smallSound.volume = volume;
    smallSound.play();
  }

  return (
    <div className={ 
      `clickable-box ${optionClasses} ${
        boxClicked ? "throw-up-down" : ""
      }`}  onClick={
            () => {
                setBoxClicked(true);
                clickBoxHandler(soundPlayed, appVar.effectsVolume)
                setTimeout(() => {
                  handleClick();
                  setBoxClicked(false);
                }, 1000)}}>
        {children}
    </div>
  )
}
