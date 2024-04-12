import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext(undefined);

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

  
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
