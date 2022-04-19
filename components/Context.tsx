import React, { createContext } from 'react';

type UiContextI = {
  sideBarState: boolean;
};

const initialValue = {
  sideBarState: false,
};

const UIContext = createContext<UiContextI | null>(initialValue);

const UiContextProvider: React.FunctionComponent<any> = (props) => {
  return <UIContext.Provider value={initialValue} {...props} />;
};

export const ManageUiContext: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }): JSX.Element => {
  return <UiContextProvider> {children}</UiContextProvider>;
};

const useUIContext = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export default useUIContext;
