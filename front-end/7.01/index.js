const Redux = require('redux');

const INITIAL_STATE = {
  user: '',
  isLogged: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: !state.isLogged,
        user: action.user,
      }
    default:
      return state;
  }
};

const fazerLogin = (user) => ({
  type: "LOGIN",
  user,
});


const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('joao'));

console.log(store.getState());