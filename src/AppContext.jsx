import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [variables, setVariables] = useState({
      musicVolume: 0.5,
      effectsVolume: 0.5,
      timerValue: null,
    });
  
    const updateVariables = (newVariables) => {
      setVariables(newVariables);
    };
  
    return (
      <AppContext.Provider value={{ variables, updateVariables }}>
        {children}
      </AppContext.Provider>
    );
  };