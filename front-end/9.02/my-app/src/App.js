import React, { useContext } from "react";
import AppContext from "./context/AppContext";

function App() {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>

      <button
        type="button"
        onClick={ () => setStateA('newState') }
      >
        Click
      </button>
    </div>
  );
}

export default App;
