import React, { createContext, useReducer } from 'react';

type stateT = {
  sideBarState: boolean;
  displayDropdown: boolean;
};

type ActionT =
  | {
      type: 'OPEN_SIDEBAR';
    }
  | {
      type: 'CLOSE_SIDEBAR';
    }
  | {
      type: 'OPEN_DROPDOWN';
    }
  | {
      type: 'CLOSE_DROPDOWN';
    };

function uiReducer(state: stateT, action: ActionT) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        sideBarState: true,
      };
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        sideBarState: false,
      };
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      };
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      };
    }
  }
}

const initialState: stateT = {
  sideBarState: false,
  displayDropdown: false,
};

const UIContext = createContext<stateT | null>(initialState);

const UiContextProvider: React.FunctionComponent<any> = (props) => {
  // const reducer = useReducer(initialValue);

  return <UIContext.Provider value={initialState} {...props} />;
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
