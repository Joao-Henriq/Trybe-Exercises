import React, { useState } from 'react'
import AppContext from './AppContext'

function MyProvider({ children }) {
  const [state1, setState1] = useState('EstadoInicialA');
  const [state2, setState2] = useState('EstadoInicialB');
  
  const contextValue = {
    state1,
    setState1,
    state2,
    setState2,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  )
}

export default MyProvider