import { useState, useContext, createContext } from 'react';

export const UserContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
    const [userVar, setUserVar] = useState({
        username:undefined,
        id:undefined,
        scores:undefined,
        isLoggedIn:false,
    });
  
    const updateUserVar = (newVariables) => {
      setUserVar(newVariables);
    };
  
    return (
      <UserContext.Provider value={{ userVar, updateUserVar }}>
        {children}
      </UserContext.Provider>
    );
};
  
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within an UserProvider');
    }
    return context;
};