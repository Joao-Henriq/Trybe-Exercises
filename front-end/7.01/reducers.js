import { combineReducers } from "redux";
import  meuOutroReducer  from "./meuOutroReducer";
import  meuReducer  from "./meuReducer";
import  reducer from "./meuReducerInicial";

const reducersCombinados = combineReducers({
  meuReducer,
  meuOutroReducer,
  reducer,
});

export default reducersCombinados;