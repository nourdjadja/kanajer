import { useState } from 'react'
import {hiraganas, katakanas, romajis} from './scripts/kanas'

export const Steps = ({
    id,
}) => {

    const [isOpen, setIsOpen] = useState(false);

    switch(id){
        case 0:
            return(<>
                <div className="id0-container">
                    
                </div>
            </>)
        case 1:
            return(<>
                <div className="id1-container">
                    
                </div>
            </>)
        case 2:
            return(<>
                <div className="id2-container">
                    
                </div>
            </>)
        case 3:
            return(<>
                <div className="id3-container">
                    
                </div>
            </>)
        case 4:
            return(<>
                <div className="id4-container">
                    
                </div>
            </>)
    }
}
