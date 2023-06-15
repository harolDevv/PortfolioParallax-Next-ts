import React, { createContext, PropsWithChildren, useState } from 'react';

interface AppContextType {
  pageState: string;
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

const initialAppContext: AppContextType = {
  pageState: 'LandingPage',
  setPageState: () => {},
};

const AppContext = createContext<AppContextType>(initialAppContext);

const AppProvider: React.FC<PropsWithChildren>= ({ children }) => {
  const [pageState, setPageState] = useState('LandingPage');

  return (
    <AppContext.Provider value={{ pageState, setPageState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
