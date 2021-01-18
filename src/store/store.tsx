import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useContext, useReducer } from 'react';

interface State {
  reqId: string | null;
  candidateName: string | null;
  positionTitle: string;
  desiredSalary: string;
  process: string;
  pushCard: any;
}

export const Actions = {
  setReqId: 'setReqId',
  setCandidateName: 'setCandidateName',
  setPositionTitle: 'setPositionTitle',
  setDesiredSalary: 'setDesiredSalary',
  setProcess: 'setProcess',
  setPushCard: 'setPushCard',
};

const initialState: State = {
  reqId: null,
} as State;

const Context = React.createContext({
  state: initialState,
  dispatch: (_: { type: string; payload?: any }) => {},
});

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case Actions.setReqId:
      return {
        ...state,
        reqId: action.payload,
      };
    case Actions.setCandidateName:
      return {
        ...state,
        candidateName: action.payload,
      };
    case Actions.setDesiredSalary:
      return {
        ...state,
        desiredSalary: action.payload,
      };
    case Actions.setPositionTitle:
      return {
        ...state,
        positionTitle: action.payload,
      };
    case Actions.setProcess:
      return {
        ...state,
        process: action.payload,
      };
    case Actions.setPushCard:
      return {
        ...state,
        pushCard: action.payload,
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
