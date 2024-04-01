import './Settings.css'

export const Settings = ({
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
        
        </div>
      </div>
    )
  }
}