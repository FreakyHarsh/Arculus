import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useContext, useReducer } from 'react';

interface State {
  list: any[];
}

export const Actions = {
  setList: 'setList',
};

const initialState: State = {
  list: [] as any,
} as State;

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: string; payload?: any }) => {},
});

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case Actions.setList:
      console.log(state.list);
      console.log(action.payload);
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export const AppStateGG: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
