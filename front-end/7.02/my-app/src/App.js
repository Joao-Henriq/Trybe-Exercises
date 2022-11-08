// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './MyContext';

class App extends React.Component {
  state = {
    color: ['blue', 'red', 'yellow'],
    index: 0,
  };

  onClickToChangeColor = () => {
    const { index } = this.state;
    this.setState((prevState) => ({
      index: prevState.index + 1, 
    }));
    if (index > 2) {
      this.setState({
        index: 0,
      })
    };
  }

  render() {
    const contexto = {
      index: this.state.index,
      color: this.state.color,
      onClickToChangeColor: this.onClickToChangeColor
    }
    return (
      <MyContext.Provider value={contexto}>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}
export default App;