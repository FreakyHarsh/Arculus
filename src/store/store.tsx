import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useContext, useReducer } from 'react';

interface State {
  requisitionNavigation: any;
}

export const Actions = {
  setRequisitionNavigation: 'setRequisitionNavigation',
};

const initialState: State = {
  requisitionNavigation: '',
} as State;

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: string; payload?: any }) => {},
});

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case Actions.setRequisitionNavigation:
      return {
        ...state,
        requisitionNavigation: action.payload,
      };
    default:
      return state;
  }
};

export const AppState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
