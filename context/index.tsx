import React, { createContext, useReducer, useContext } from "react";
import { State, initialState } from "./store";
import { Action, reducer } from "./reducer";

const Context = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => null,
]);

const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useGlobal = (): [State, React.Dispatch<Action>] => useContext(Context);

export default ContextProvider;
export { useGlobal };
