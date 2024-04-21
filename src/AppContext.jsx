import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
    const [appVar, setAppVar] = useState({
      effectsVolume: 0.5,
      isLoggedIn:undefined
    });
  
    const updateAppVar = (newVariables) => {
      setAppVar(newVariables);
    };
  
    return (
      <AppContext.Provider value={{ appVar , updateAppVar }}>
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
