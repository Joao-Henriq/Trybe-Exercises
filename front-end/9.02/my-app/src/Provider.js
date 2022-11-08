import React, { useState } from "react";
import AppContext from "./App";

function Provider({children}) {
  const [stateA, setStateA] = useState('initalStateA');
  const [stateB, setStateB] = useState('initalStateB');

  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  }

  return (
    <AppContext.Provider value={ contextValue } >
      { children }
    </AppContext.Provider>
  )
}

export default Provider;