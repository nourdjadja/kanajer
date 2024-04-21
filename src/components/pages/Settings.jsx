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
    console.log(newAppVar)
  };

  if (!isOpen) {
    return <></>;
  } else {
    return (
      <div className='popover-set'>
        <button className='absolute-left-return' onClick={handleDismount}>return</button>
        <div className='big-container'>
          <div>
            <label>Effects Volume:</label>
            <input type="range" min="0" max="1" step="0.1" value={appVar.effectsVolume} onChange={handleEffectsVolumeChange} />
          </div>
        </div>
      </div>
    );
  }
};
