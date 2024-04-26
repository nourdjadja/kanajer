import { useAppContext } from '../../AppContext'
import './Settings.css'

export const Settings = ({
  isOpen,
  handleDismount
}) => {

  const { appVar, updateAppVar } = useAppContext();

  const handleEffectsVolumeChange = (event) => {
    const newAppVar = { ...appVar, effectsVolume: parseFloat(event.target.value) };
    updateAppVar(newAppVar);
  };

  const handleVoicesVolumeChange = (event) => {
    const newAppVar = { ...appVar, voicesVolume: parseFloat(event.target.value) };
    updateAppVar(newAppVar);
  };

  if (!isOpen) {
    return <></>;
  } else {
    return (
      <div className='popover-set'>
        <button style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    border:"none"
                }} className='absolute-left-return' onClick={handleDismount}>
        <img src="/image/toLeft.svg" style={{
                        width:"50px"
                    }} alt="Back" srcset="" />
        </button>
        <div className='big-container'>
          <div className='half'>
            <label>Effects Volume:</label>
            <input type="range" min="0" max="1" step="0.1" value={appVar.effectsVolume} onChange={handleEffectsVolumeChange} />
          </div>

          {/* <div className='half'>
            <label>Voices Volume:</label>
            <input type="range" min="0" max="1" step="0.1" value={appVar.voicesVolume} onChange={handleVoicesVolumeChange} />
          </div> */}
        </div>
      </div>
    );
  }
};
