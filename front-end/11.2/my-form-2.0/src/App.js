import React, { Component } from 'react';
import Form from './components/Form.jsx';
import './App.css';


class App extends Component {
  render() { 
    return (
      <div>
        <h1 className='App'>My form</h1>
        <Form />
      </div>
    );
  }
}
 
export default App;