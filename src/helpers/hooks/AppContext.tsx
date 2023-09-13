/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { appReducer } from './appReducer';

interface IAppContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext<any>({});

const AppContextProvider: React.FC<IAppContextProps> = (props) => {
  const initialState = {
    toggleTheme: {
      theme: 'light'
    }
  };

  const navigate = useNavigate();
  const [appState, appDispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch, navigate }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
