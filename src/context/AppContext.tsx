import React, {
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
  createContext,
} from "react";
import { StoreApi } from "./types";
import { reducer } from "./reducer";

const AppContext = createContext<StoreApi>({
  state: [],
  dispatch: () => null,
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, []);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) throw new Error(`No provider for AppContext`);

  return context;
}

export { AppContextProvider, useAppContext };
