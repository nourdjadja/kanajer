import { useState } from "react"

export const ClickableBox = ({
    children,
    optionClasses,
    handleClick
}) => {

  const [boxClicked, setBoxClicked] = useState(false)

  return (
    <div className={ 
      `clickable-box ${optionClasses} ${
        boxClicked ? "throw-up-down" : ""
      }`}  onClick={
            () => {
                setBoxClicked(true);

                setTimeout(() => {
                  handleClick();
                  setBoxClicked(false);
                }, 1000)}}>
        {children}
    </div>
  )
}
