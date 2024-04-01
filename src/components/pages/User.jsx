import './User.css'

export const User = ({
  isOpen,
  handleDismount
}) => {
  if(!isOpen){
    return <></>
  } else {
    return (
      <div className='popover-set'>
        <button className='absolute-left-return' onClick={handleDismount}>ret</button>
        <div className='big-container'>
          
        </div>
      </div>
    )
  }
}