import { useState, useContext, createContext } from 'react';

export const UserContext = createContext(undefined);

export const UserContextProvider = ({ children }) => {
    const [variables, setVariables] = useState({
        username:undefined,
        scores:undefined
    });
  
    const updateVariables = (newVariables) => {
      setVariables(newVariables);
    };
  
    return (
      <UserContext.Provider value={{ variables, updateVariables }}>
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