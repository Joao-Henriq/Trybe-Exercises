import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      numClick: 0
    };
  }
  
  handleClick = () => {
    
    this.setState((prevState, _props) => ({
      numClick: prevState.numClick + 1,
    }))
    console.log(this.state);  

  }
  
  changeColor = (num) => {
    return num % 2 === 0 ? 'green' : 'red';
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}
        style={{backgroundColor: this.changeColor(this.state.numClick)}}
        >
          Number of clicks: {this.state.numClick}
          </button>
      </div> 
    );

  }
}

export default App;